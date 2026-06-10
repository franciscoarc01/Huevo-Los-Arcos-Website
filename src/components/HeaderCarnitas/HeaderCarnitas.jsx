import { useState } from "react"
import { Link } from "react-router-dom"
import "./HeaderCarnitas.scss"
import logo from "../../assets/lelecarnitaslogo.svg"


const HeaderCarnitas = () => {

    return (
        <>
            <header id="header-carnitas">
                <Link id="logo" to="/carnitas/">
                    <img src={logo} alt="logo" />
                </Link>
                <div id="menu">
                    <ul>
                        <li><Link className="text-decore-none itemHeader" to="/carnitas/">Inicio</Link></li>
                        <li><Link className="text-decore-none itemHeader" to="/carnitas/blog">Blog</Link></li>
                        <li><Link className="text-decore-none itemHeader" to="/carnitas/contacto">Contacto</Link></li>
                        
                    </ul>
                </div>
            </header>
        </>
    )
}

export { HeaderCarnitas }
