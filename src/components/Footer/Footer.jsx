import { Link } from "react-router-dom"
import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="div1">
                    <Link className="text-decore-none" to="/carnitas/">
                        <span className="brand-name-container">
                            <span className="carnitas">CARNITAS</span>
                            <span className="lele"> LELE</span>
                        </span>
                    </Link>
                    <p className="texto-footer">
                        Carnitas artesanales de Querétaro. <br /> Sabor profundo, cocción lenta.
                    </p>
                    <section>
                        botones de social media
                    </section>
                </div>
                <div>
                    <h4 className="texto-footer">COMERCIALIZADORA</h4>
                    <Link className="text-decore-none texto-footer" to="#">Comercializadora Lele</Link>
                </div>
                <div>
                    <h4 className="texto-footer">AYUDA</h4>
                    <div className="grid">
                        <Link className="text-decore-none texto-footer" to="/carnitas/contacto/faq">Preguntas frecuentes</Link>
                        <Link className="text-decore-none texto-footer" to="/carnitas/contacto">Contacto directo</Link>
                    </div>
                </div>
                <div>
                    <h4 className="texto-footer">QUERÉTARO</h4>
                    <p className="texto-footer">Entrega local</p>
                    <p className="texto-footer">Lun - Sáb · 9am - 6pm</p>
                    <p className="texto-footer">Pedidos por WhatsApp</p>
                </div>
            </footer>
        </>
    )
}

export { Footer }