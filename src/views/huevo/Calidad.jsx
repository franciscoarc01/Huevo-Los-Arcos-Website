import { Component } from "react"
import "./Calidad.scss"
import Linea from "../../components/Linea/index.js"
import porqueHuevoLosArcos from "../../assets/porque-huevos-los-arcos.jpg"

const timeline = [
    (
        <h2 className="titulo-linea">Producto fresco</h2>
    ),
    (
        <h2 className="titulo-linea">Calidad constante</h2>
    ),
    (
        <h2 className="titulo-linea">Procesos constantes</h2>
    ),
    (
        <h2 className="titulo-linea">Atención personalizada</h2>
    ),
    (
        <h2 className="titulo-linea">Distribución eficiente</h2>
    ),
    (
        <h2 className="titulo-linea">Compromiso con el cliente, mejora continua</h2>
    )
]

class Calidad extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMobile: null
        }
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 768 });
    }

    render() {
        return (
            <section>
                <div className="hero-section-calidad">
                    <div className="hero-overlay"></div>
                    <div className="hero-content-calidad">
                        <p>
                            Calidad
                            <br />
                            <br />
                            creemos que la calidad comienza desde el origen.
                            Nuestro compromiso es producir y distribuir huevo fresco
                            bajo los más altos estándares de calidad, garantizando
                            un producto confiable para nuestros clientes y consumidores.
                        </p>
                    </div>
                </div>
                <section className={this.state.isMobile ? "block" : "flex"}>
                    <div id="quienes-somos-imagen">
                        <img src={porqueHuevoLosArcos} alt="huevo1" />
                    </div>
                    <div id="quienes-somos-text">
                        <h2>¿POR QUÉ HUEVO LOS ARCOS?</h2>
                        <p>
                            Porque ofrecemos más que un producto.
                            Ofrecemos confianza, frescura y compromiso
                            en cada entrega. Nuestro objetivo es convertirnos
                            en el aliado estratégico de nuestros clientes,
                            aportando valor mediante calidad,
                            servicio y cumplimiento.
                        </p>
                    </div>
                </section>
                <section className="timeline-section">
                    <h2>VENTAJAS COMPETITIVAS</h2>
                    <Linea contenido={timeline} />
                </section>
            </section>
        )
    }
}

export { Calidad }