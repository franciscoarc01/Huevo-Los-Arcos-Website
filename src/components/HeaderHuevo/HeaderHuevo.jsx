import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./HeaderHuevo.scss";
import BotonAHuevo from "../BotonAHuevo/index.js";
import logo from "../../assets/Logo-Los-Arcos.svg"
import Carrito from "./icons/shopping-cart.svg"

const HeaderHuevo = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 600);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <header id="header-huevo">
                <button id="btnHamburguesa" onClick={() => setShowMenu(!showMenu)}>
                    &#9776;
                </button>
                <Link to="/huevo/" className="logo" onClick={() => setShowMenu(false)}><img src={logo} alt="logo" /></Link>
                <div id="menu" style={
                    isMobile ?
                        showMenu ?
                            {
                                opacity: 1, visibility: "visible",
                                top: `${document.getElementById("header-huevo").offsetHeight}px`,
                            } :
                            {
                                opacity: 0, visibility: "hidden",
                                top: `${document.getElementById("header-huevo").offsetHeight}px`
                            } :
                        {}}>
                    <ul >
                        <li><Link onClick={() => setShowMenu(false)} className="text-decoration-none itemHeader" to="/huevo/ventas">VENTAS</Link></li>
                        <li><Link onClick={() => setShowMenu(false)} className="text-decoration-none itemHeader" to="/huevo/nosotros">NOSOTROS</Link></li>
                        <li><Link onClick={() => setShowMenu(false)} className="text-decoration-none itemHeader" to="/huevo/productos">PRODUCTOS</Link></li>
                        <li><Link onClick={() => setShowMenu(false)} className="text-decoration-none itemHeader" to="/huevo/calidad">CALIDAD</Link></li>
                        <li><Link onClick={() => setShowMenu(false)} className="text-decoration-none itemHeader" to="/huevo/recetas">RECETAS</Link></li>
                        <li><Link onClick={() => setShowMenu(false)} className="text-decoration-none itemHeader" to="/huevo/distribucion">DISTRIBUCIÓN</Link></li>
                        <li><Link onClick={() => setShowMenu(false)} className="text-decoration-none itemHeader" to="/huevo/contacto">CONTACTO</Link></li>
                    </ul>
                </div>
                <BotonAHuevo linkTo="#">Comprar ahora <span id="span-carrito-icon"><img src={Carrito} alt="carrito" /></span></BotonAHuevo>
            </header >
        </>
    )
}

export { HeaderHuevo }
