import {
    Routes,
    Route,
    Link
} from "react-router-dom";

import { Component } from "react"
import "./Productos.scss"
import CardProductos from "../../components/CardProductos"
import img12Piezas from "../../assets/12huevos.jpg"
import img18Piezas from "../../assets/18huevos.jpg"
import img30Piezas from "../../assets/30huevos.jpg"
import img90Piezas from "../../assets/caja-90.png"
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
                        image={img12Piezas}
                        title="12 piezas"
                        buttonProps={
                            {
                                linkTo: "#",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={img18Piezas}
                        title="24 piezas"
                        buttonProps={
                            {
                                linkTo: "#",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={img30Piezas}
                        title="30 piezas"
                        buttonProps={
                            {
                                linkTo: "#",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={img90Piezas}
                        title="90 piezas"
                        buttonProps={
                            {
                                linkTo: "#",
                                btnlabel: "VER PRODUCTO",
                                className: this.state.isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={""}
                        title="360 piezas"
                        buttonProps={
                            {
                                linkTo: "#",
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