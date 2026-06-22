import { Component } from "react"
import "./Productos.scss"
import CardProductos from "../../components/CardProductos"
class Productos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth < 600,
        };
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize() {
        this.setState({
            isMobile: window.innerWidth < 600,
        });
    }

    render() {
        return (
            <section>
                {/* <div className="hero-section-inicio"> */}
                {/* <div className="hero-overlay"></div> */}
                {/* <div className="hero-content-inicio"> */}
                {/* </div> */}
                {/* </div> */}
                <p id="descripcion-productos">Contamos con diferentes presentaciones de huevo para toda opción de consumo</p>
                <section id="productos-grid">
                    <CardProductos
                        image={"/images/productos/12huevos.jpg"}
                        title="12 piezas"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/1",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={"/images/productos/18huevos.jpg"}
                        title="24 piezas"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/2",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={"/images/productos/30huevos.jpg"}
                        title="30 piezas"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/3",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={"/images/productos/caja-90.png"}
                        title="90 piezas"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/4",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={""}
                        title="360 piezas"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/5",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                </section>
            </section>
        )
    }
}

export { Productos } 