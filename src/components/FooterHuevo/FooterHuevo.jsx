import "./FooterHuevo.scss"
import logo from "../../assets/Logo-Los-Arcos.svg"
import { Link } from "react-router-dom"
import FacebookIcon from "./icons/facebook-brands-solid-full.svg"
import InstagramIcon from "./icons/instagram-brands-solid-full.svg"

const FooterHuevo = () => {
    return (
        <>
            <footer>
                <div className="footer-col1">
                    <Link to="/huevo/"><img src={logo} alt="logo" className="logo" /></Link>
                    <p>Frescura que se nota, calidad que te acompaña.</p>
                    <div id="social-icons">
                        <Link><span><img id="facebookIcon" src={FacebookIcon} alt="FacebookIcon" /></span></Link>
                        <Link><span><img id="instagramIcon" src={InstagramIcon} alt="InstagramIcon" /></span></Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-left">ENLACES</h3>
                    <ul>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Inicio</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/nosotros">Nosotros</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/productos">Productos</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/calidad">Calidad</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/recetas">Recetas</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/distribucion">Distribución</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-left">PRODUCTOS</h3>
                    <ul>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Huevo Blanco</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Huevo Rojo</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Huevo Orgánico</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Huevo Pasteurizado</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Huevo Líquido</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-left">AYUDA</h3>
                    <ul>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Preguntas Frecuentes</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Políticas de envío</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Políticas de privacidad</Link></li>
                        <li className="list-style-none text-left"><Link className="text-decoration-none" to="/huevo/">Términos y condiciones</Link></li>
                    </ul>
                </div>
                <div>

                </div>
            </footer>
        </>
    )
}

export { FooterHuevo }
