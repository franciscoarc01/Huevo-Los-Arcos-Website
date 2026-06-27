import ReactDOMServer from 'react-dom/server'
import { escapeInject } from 'vite-plugin-ssr/server'

export { render }

function render(pageContext) {
    const { Page } = pageContext
    const pageHtml = ReactDOMServer.renderToString(<Page />)

    return escapeInject`<!doctype html>
            <html lang="es-mx">

            <head>
            <meta charset="UTF-8" />
            <!-- <link rel="icon" type="image/svg+xml" href="/Logo-Los-Arcos.svg" /> -->
            <meta name="viewport"
                content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, target-densitydpi=device-dpi">
            <title>Huevos Los Arcos</title>
            </head>

            <body>
            <div id="root">${pageHtml}</div>
            <text hidden>
                Este sitio web fue creado por Francisco Árciga Nolasco.
                Si quieres contratar mis servicios de desarrollo web, puedes contactarme al correo:
                f.arciga@jtisoluciones.onmicrosoft.com
            </text>
            </body>

            </html>`
}