export const waitForImages = (ref) => {
    const imgArray = Array.from(ref?.current?.getElementsByTagName('img') || []);

    if (imgArray.length === 0) return Promise.resolve();

    const promises = imgArray.map((item) => {
        return new Promise((resolve, reject) => {

            // 1. ¿Ya está lista? (Caché o carga instantánea)
            if (item.complete && item.naturalHeight !== 0) {
                resolve(true);
                return;
            }

            // 2. Definir listeners
            const funcCarga = () => {
                item.removeEventListener('load', funcCarga);
                item.removeEventListener('error', funcError);
                resolve(true);
            };

            const funcError = () => {
                item.removeEventListener('load', funcCarga);
                item.removeEventListener('error', funcError);
                reject(new Error(`Error cargando imagen: ${item.src}`));
            };

            item.addEventListener('load', funcCarga);
            item.addEventListener('error', funcError);

            // 3. EL TRUCO QUE FUNCIONÓ: Forzar carga si es lazy
            // Esto evita que el navegador espere al scroll para empezar a descargar
            if (item.loading === 'lazy') {
                item.removeAttribute('loading');
            }

            // 4. Timeout de seguridad (para evitar colgarse si algo falla)
            setTimeout(() => {
                if (!item.complete) {
                    item.removeEventListener('load', funcCarga);
                    item.removeEventListener('error', funcError);
                    reject(new Error(`Timeout: Imagen no cargó en 2s: ${item.src}`));
                }
            }, 2000);
        });
    });
    return Promise.all(promises);
};