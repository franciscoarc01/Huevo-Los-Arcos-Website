import { Link } from "react-router-dom"
import "./BotonAHuevo.scss"

const BotonAHuevo = ({ children, linkTo, className, id, type }) => {
    return (
        <>
            <Link to={linkTo}>
                <button type={type || "button"} id={id || ""} className={`boton-a-huevo ${className || ""}`}>
                    {children}
                </button>
            </Link>
        </>
    )
}

export { BotonAHuevo }