import { Component } from "react"
import { Routes, Route } from "react-router-dom"
import HeaderCarnitas from "../../components/HeaderCarnitas/index.js"
import Footer from "../../components/Footer/index.js"
import { Blog } from "./Blog.jsx"
import { Contacto } from "./Contacto.jsx"
import { FAQ } from "../FAQ.jsx"
import { Nosotros } from "./Nosotros.jsx"
import { Historia } from "./Historia.jsx"
import { Valores } from "./Valores.jsx"
import { Raices } from "./Raices.jsx"
import { MunnecaLele } from "../Munneca-Lele.jsx"

class Inicio extends Component {

    render() {
        return (
            <>
                <section className="relative">
                    <HeaderCarnitas />
                    <Routes basename="carnitas">
                        <Route path="/" element={<Contenido />} />
                        <Route path="nosotros" element={<Nosotros />} />
                        <Route path="historia" element={<Historia />} />
                        <Route path="valores" element={<Valores />} />
                        <Route path="raices" element={<Raices />} />
                        <Route path="munneca-lele" element={<MunnecaLele />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="contacto" element={<Contacto />} />
                        <Route path="contacto/faq" element={<FAQ />} />
                    </Routes>
                </section>
                <Footer />
            </>
        )
    }
}

const Contenido = () => {
    return (
        <div>
            <div id="hero">

            </div>
            <section>
                <h2>Productos</h2>
            </section>
            <section>
                <h2>¿Cómo las quieres?</h2>
                <p>Elige tu forma de disfrutar</p>
                <div className="cuadricula"></div>
            </section>
            <div>
                <h2>¿Por qué Carnitas Lele?</h2>
                <section>
                </section>
            </div>
            <section>
                <h2>Querétaro ya las probó</h2>
                <p>+2000 pedidos este mes</p>
            </section>
        </div>
    )
}

export { Inicio }
