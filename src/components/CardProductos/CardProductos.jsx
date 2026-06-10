import BotonAHuevo from "../BotonAHuevo/index.js"
import "./CardProductos.scss"

const CardProductos = ({ image, title, buttonProps: { linkTo, btnlabel, className = "" } }) => {
    return (
        <>
            <section className="card-producto">
                <div className="imagen-producto">
                    <img src={image} alt="" />
                </div>
                <h2>{title}</h2>
                <BotonAHuevo linkTo={linkTo} type="button" className={className}>{btnlabel}</BotonAHuevo>
            </section>
        </>
    )
}

export { CardProductos }