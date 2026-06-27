import { Component } from "react";

class Raices extends Component {
    render() {
        return (
            <div>
                <div id="hero">

                </div>
                <section>
                    <p>Nuestro origen</p>
                    <p>
                        Raíces Lele representa el origen cultural,
                        humano y territorial de Carnitas Lele.
                        Nace en Amealco, Querétaro, inspirado en la tradición otomí y en la muñeca Lele como símbolo de identidad,
                        familia y
                        continuidad.
                    </p>
                    <p>
                        Aquí comienza nuestra historia.
                    </p>
                </section>
                <section>
                    <section>
                        <div>
                            <p>IDENTIDAD CULTURAL</p>
                        </div>
                        <h3>Más que folklore, inspiración real</h3>
                        <p>
                            Nuestra identidad no es decorativa.
                            Es el fundamento de todo lo que hacemos.
                            Nace en Amealco, se nutre de la influencia otomí y
                            se manifiesta en cada detalle de nuestra marca.
                        </p>
                        <ul class="space-y-2 text-gray-700">
                            <li class="flex items-center gap-3">
                                <span class="w-2 h-2 rounded-full bg-[#B07F27]">
                                </span>
                                <span>Origen en Amealco, tierra de manantiales</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-2 h-2 rounded-full bg-[#B07F27]">
                                </span>
                                <span>Influencia otomí en cada expresión</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-2 h-2 rounded-full bg-[#B07F27]">
                                </span>
                                <span>Respeto profundo por lo hecho a mano</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-2 h-2 rounded-full bg-[#B07F27]">
                                </span>
                                <span>Tradición como valor, no como adorno</span>
                            </li>
                        </ul>
                        <p>Tradición no es pasado. Es hacerlo bien desde el origen.</p>
                    </section>
                    <text>Imagen</text>
                </section>
                <section>
                    <p>Explora nuestras raíces</p>
                    <h2>Conoce cada parte de nuestra historia</h2>
                    <div>
                        cuadricula de enlaces
                    </div>
                </section>
                <section>
                    <text>Imagen</text>
                    <section>
                        <div>
                            <p>Conexión con nuestro producto</p>
                        </div>
                        <h3>De nuestras raíces a tu mesa</h3>
                        <p>
                            Las raíces culturales de Lele inspiran una forma de cocinar basada en el respeto,
                            el tiempo y la calidad. Hoy, esa tradición se elabora bajo procesos certificados TIF,
                            garantizando seguridad alimentaria sin perder el sabor auténtico.
                        </p>
                        <p>Aquí se unen cultura y tecnología.</p>
                    </section>
                </section>
                <div>
                    <div>
                        <p>Lo que nos define</p>
                        <h2>Nuestros valores</h2>
                    </div>
                    <section>
                        Carrusel de imágenes
                    </section>
                </div>
                <div>
                    <p>
                        Conocer nuestras raíces es entender nuestro sabor.
                    </p>
                    <Link to="/carnitas/historia" className="text-decore-none">
                        <div>
                            Conoce Nuestra Historia
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export { Raices }