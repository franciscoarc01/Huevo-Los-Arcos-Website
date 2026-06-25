import { Component, createRef } from "react";
import "./Nosotros.scss";
import huevo1 from "../../assets/img_huevos2.jpg"
import iconMision from "../../assets/icons/mision.svg"
import iconVision from "../../assets/icons/vision.svg"
import iconCalidad from "../../assets/icons/calidad.svg"
import iconIntegridad from "../../assets/icons/integridad.svg"
import iconCompromiso from "../../assets/icons/handshake-solid-full.svg"
import iconServicio from "../../assets/icons/servicio.svg"
import iconInnovacion from "../../assets/icons/innovacion.svg"
import iconResponsabilidad from "../../assets/icons/responsabilidad.svg"
import iconEquipo from "../../assets/icons/equipo.svg"
import Loader from "../../components/Loader/index.js"
import Styles from "../../utils/styles.js"
import { waitForImages } from "../../utils/logica.js"

class Nosotros extends Component {

    icons = {
        iconMision,
        iconVision,
        iconCalidad,
        iconIntegridad,
        iconCompromiso,
        iconServicio,
        iconInnovacion,
        iconResponsabilidad,
        iconEquipo
    }

    imagenes = [
        huevo1
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
        this.setState({ isMobile: window.innerWidth < 768 });
    }

    render() {
        return (
            <div ref={this.ref}>
                <Loader style={{ ...Styles.overlayLoading, opacity: !this.state.isLoaded ? 1 : 0, visibility: !this.state.isLoaded ? "visible" : "hidden" }} />
                <div className="hero-section-nosotros">
                    <div className="hero-overlay"></div>
                    <div className="hero-content-nosotros">
                        <p>
                            Nosotros
                            <br />
                            <br />
                            La experiencia adquirida durante más de 40 años
                            nos ha permitido perfeccionar cada etapa de nuestra operación,
                            desde la producción hasta la distribución.
                        </p>
                    </div>
                </div>
                <section className={this.state.isMobile ? "block" : "flex"}>
                    <div id="info-text">
                        <h2>¿QUIÉNES SOMOS?</h2>
                        <p>
                            Somos una empresa especializada en la producción,
                            selección, empaque y comercialización de huevo
                            blanco. Nuestra operación está orientada a garantizar
                            altos estándares de calidad durante cada etapa
                            del proceso productivo, permitiendo ofrecer productos frescos y confiables para nuestros consumidores.
                            Trabajamos con una visión de largo plazo enfocada en la mejora continua, la eficiencia operativa
                            y la satisfacción de nuestros clientes, manteniendo siempre nuestro compromiso con la calidad.
                            Hoy, Huevo Los Arcos continúa creciendo con la
                            misma pasión y responsabilidad que dieron origen a
                            nuestra
                            empresa.
                        </p>
                    </div>
                    <div id="info-imagen">
                        <img src={this.imagenes[0]} alt="huevo1" />
                    </div>
                </section>
                <section id="vision-mision">
                    <div id="mision" className="inline-flex">
                        <section className="icon-container">
                            <img src={this.icons.iconMision} alt="iconMision" />
                        </section>
                        <section>
                            <h2>MISIÓN</h2>
                            <p>
                                Producir y comercializar huevo de alta calidad mediante procesos eficientes
                                y responsables que garanticen frescura, inocuidad y valor nutricional
                                para nuestros consumidores, generando valor
                                para clientes, colaboradores y socios comerciales.
                            </p>
                        </section>
                    </div>
                    <div id="vision" className="inline-flex">
                        <section className="icon-container" >
                            <img src={this.icons.iconVision} alt="iconVision" />
                        </section>
                        <section>
                            <h2>VISIÓN</h2>
                            <p>
                                Ser una empresa líder en la industria avícola mexicana,
                                reconocida por la calidad de sus productos,
                                la eficiencia de sus operaciones y la confianza de
                                sus clientes.
                            </p>
                        </section>
                    </div>
                </section>
                <section id="valores-container">
                    <h2 id="valores-title">NUESTROS VALORES</h2>
                    <div className={this.state.isMobile ? "block" : "inline-flex"}>
                        <div className="inline-flex valor-container">
                            <section className="icon-container">
                                <img src={this.icons.iconCalidad} alt="icon" />
                            </section>
                            <section>
                                <h2>CALIDAD</h2>
                                <p>
                                    Buscamos la excelencia
                                    en cada etapa de
                                    nuestros procesos.
                                </p>
                            </section>
                        </div>
                        <div id="" className="inline-flex valor-container">
                            <section className="icon-container" >
                                <img src={this.icons.iconIntegridad} alt="icon" />
                            </section>
                            <section>
                                <h2>INTEGRIDAD</h2>
                                <p>
                                    Actuamos con honestidad
                                    y transparencia.
                                </p>
                            </section>
                        </div>
                        <div id="" className="inline-flex valor-container">
                            <section className="icon-container">
                                <img src={this.icons.iconCompromiso} className={this.state.isMobile ? "w-14dvw" : "w-4dvw"} alt="icon" />
                            </section>
                            <section>
                                <h2>COMPROMISO</h2>
                                <p>
                                    Cumplimos con responsabilidad
                                    nuestros acuerdos y objetivos.
                                </p>
                            </section>
                        </div>
                        <div id="" className="inline-flex valor-container">
                            <section className="icon-container" >
                                <img src={this.icons.iconServicio} alt="icon" />
                            </section>
                            <section>
                                <h2>SERVICIO</h2>
                                <p>
                                    Construimos relaciones
                                    duraderas con
                                    nuestros clientes.
                                </p>
                            </section>
                        </div>
                    </div>
                    <div className={this.state.isMobile ? "block" : "inline-flex"}>
                        <div id="" className="inline-flex valor-container">
                            <section className="icon-container">
                                <img src={this.icons.iconEquipo} alt="icon" />
                            </section>
                            <section>
                                <h2>TRABAJO EN EQUIPO</h2>
                                <p>
                                    Fomentamos la colaboración
                                    y el respeto mutuo.
                                </p>
                            </section>
                        </div>
                        <div id="" className="inline-flex valor-container">
                            <section className="icon-container" >
                                <img src={this.icons.iconInnovacion} alt="icon" />
                            </section>
                            <section>
                                <h2>INNOVACIÓN</h2>
                                <p>
                                    Fomentamos la colaboración
                                    y el respeto mutuo.
                                </p>
                            </section>
                        </div>
                        <div id="" className="inline-flex valor-container">
                            <section className="icon-container">
                                <img src={this.icons.iconResponsabilidad} alt="icon" />
                            </section>
                            <section>
                                <h2>RESPONSABILIDAD</h2>
                                <p>
                                    Actuamos con conciencia
                                    social y empresarial.
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export { Nosotros }