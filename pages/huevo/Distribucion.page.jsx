import { Component, createRef } from "react"
import "./Distribucion.scss"
import foto1 from "../../assets/camiones.png"
import foto2 from "../../assets/logistica.png"
import foto3 from "../../assets/proceso-distribucion.svg"
import BotonAHuevo from "../../components/BotonAHuevo/index.js"
import iconoHuevo from "../../assets/icons/huevo-distribucion.svg"
import iconoReloj from "../../assets/icons/reloj-distribucion.svg"
import iconoSoporte from "../../assets/icons/soporte.svg"
import iconoPin from "../../assets/icons/pin.svg"
import iconoProduccion from "../../assets/icons/proceso-distribucion/1-2.png"
import iconoEmpaque from "../../assets/icons/proceso-distribucion/2-2.png"
import iconoDistribucion from "../../assets/icons/proceso-distribucion/3.png"
import iconoPuntoVenta from "../../assets/icons/proceso-distribucion/4.png"
import iconoConsumidorFinal from "../../assets/icons/proceso-distribucion/5.png"
import Loader from "../../components/Loader/index.js"
import Styles from "../../utils/styles.js"
import { waitForImages } from "../../utils/logica.js"

class Distribucion extends Component {

    fotos = [foto1, foto2, foto3]

    iconos = {
        iconoHuevo,
        iconoReloj,
        iconoSoporte,
        iconoPin
    }

    iconosProceso = [
        iconoProduccion,
        iconoEmpaque,
        iconoDistribucion,
        iconoPuntoVenta,
        iconoConsumidorFinal
    ]

    constructor(props) {
        super(props);
        this.state = {
            isMobile: null,
            isLoaded: false,
        }
        this.ref = createRef()
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        waitForImages(this.ref).then(() => {
            this.setState({ isLoaded: true });
        });
    }

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 600 });
    }

    render() {
        return (
            <div id="distribucion-container" ref={this.ref}>
                <Loader style={{ ...Styles.overlayLoading, opacity: !this.state.isLoaded ? 1 : 0, visibility: !this.state.isLoaded ? "visible" : "hidden", }} />
                <div className="hero-section-distribucion">
                    {/* <div className="hero-overlay"></div> */}
                    <div className="hero-content-distribucion">
                        <BotonAHuevo>Solicita una cotización</BotonAHuevo>
                    </div>
                </div>
                <div id="proceso-distribucion">
                    {
                        this.state.isMobile ?
                            (
                                <>
                                    <section>
                                        <img src={this.iconosProceso[0]} alt="iconoProceso" />
                                        <h2>PRODUCCION</h2>
                                        <p>Huevo fresco de la mejor calidad</p>
                                    </section>
                                    <section>
                                        <img src={this.iconosProceso[1]} alt="iconoProceso" />
                                        <h2>EMPAQUE Y CONTROL DE CALIDAD</h2>
                                        <p>Seleccionamos y empacamos bajo estrictos estándares</p>
                                    </section>
                                    <section>
                                        <img src={this.iconosProceso[2]} alt="iconoProceso" />
                                        <h2>DISTRIBUCIÓN DIARIA</h2>
                                        <p>Rutas optimizadas para entregas eficientes</p>
                                    </section>
                                    <section>
                                        <img src={this.iconosProceso[3]} alt="iconoProceso" />
                                        <h2>PUNTO DE VENTA</h2>
                                        <p>LLegamos a tu negocio en tiempo y forma</p>
                                    </section>
                                    <section>
                                        <img src={this.iconosProceso[4]} alt="iconoProceso" />
                                        <h2>CONSUMIDOR FINAL</h2>
                                        <p>Huevo fresco en la mesa de miles de familias</p>
                                    </section>
                                </>

                            )
                            : <img src={this.fotos[2]} alt="huevo2" />
                    }
                </div>
                <section className={this.state.isMobile ? "block" : "flex"}>
                    <div className={this.state.isMobile ? "block" : ""} id="foto-camion">
                        <img src={this.fotos[0]} alt="huevo1" />
                    </div>
                    <div>
                        <h2 className="title">FLOTA DE DISTRIBUCIÓN</h2>
                        <p>
                            Contamos con una flotilla especializada que cumple con los estándares de higiene
                            y mantenimiento para conservar la frescura del producto desde la granja hasta la tienda.
                        </p>
                    </div>
                </section>
                <div id="ventajas-distribucion">
                    <h2 className="title">NUESTRAS <span>VENTAJAS</span></h2>
                    <section className={this.state.isMobile ? "block" : "flex"}>
                        <div className="inline-flex ventaja-container">
                            <section className="icon-container">
                                <img src={this.iconos.iconoReloj} alt="icon" />
                            </section>
                            <section>
                                <h2>ENTREGAS PUNTUALES</h2>
                                <p>
                                    Cumplimos horarios y rutas programadas
                                    para que tu negocio nunca se detenga.
                                </p>
                            </section>
                        </div>
                        <div className="inline-flex ventaja-container">
                            <section className="icon-container">
                                <img src={this.iconos.iconoHuevo} alt="icon" />
                            </section>
                            <section>
                                <h2>PRODUCTO FRESCO</h2>
                                <p>
                                    Distribución rápida y segura para
                                    conservar la calidad que nos distingue.
                                </p>
                            </section>
                        </div>
                        <div className="inline-flex ventaja-container">
                            <section className="icon-container">
                                <img src={this.iconos.iconoPin} alt="icon" />
                            </section>
                            <section>
                                <h2>COBERTURA REGIONAL</h2>
                                <p>
                                    Atendemos tiendas, supermercados,
                                    restaurantes y mayoristas en diversos
                                    estados.
                                </p>
                            </section>
                        </div>
                        <div className="inline-flex ventaja-container">
                            <section className="icon-container">
                                <img src={this.iconos.iconoSoporte} alt="icon" />
                            </section>
                            <section>
                                <h2>ATENCIÓN PERSONALIZADA</h2>
                                <p>
                                    Seguimiento directo, comunicación constante
                                    y soluciones a la medida de cada cliente
                                </p>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export { Distribucion }