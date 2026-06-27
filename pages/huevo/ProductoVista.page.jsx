import { Component } from "react"
import { withRouter } from "../../utils/utils.js"
import { getProductoById } from "../../service/client.js"
import { BotonAHuevo } from "../../components/BotonAHuevo/BotonAHuevo.jsx";
import { Link } from "react-router-dom";
import carritoIcon from "../../components/HeaderHuevo/icons/shopping-cart.svg"
import "./ProductoVista.scss"
import Loader from "../../components/Loader/index.js"
import Styles from "../../utils/styles.js"

class ProductoVistaClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            isMobile: window.innerWidth < 600,
            isLoad: false,
        }
        this.handleResize = this.handleResize.bind(this);
        console.log("props", props)
    }

    scrollToTop() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        getProductoById(this.props.params.id).then(data => {
            console.log("data", data)
            this.setState({ product: data }, this.scrollToTop)
        })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize() {
        this.setState({
            isMobile: window.innerWidth < 600,
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.params.id !== prevProps.params.id) {
            getProductoById(this.props.params.id).then(data => {
                console.log("data", data)
                this.setState({ product: data }, this.scrollToTop)
            })
                .catch(err => console.log(err))
        }
    }

    cargado(event) {
        this.setState({ isLoad: true })
    }

    render() {
        return (
            <>
                <Loader style={{ ...Styles.overlayLoading, opacity: !this.state.isLoad ? 1 : 0, visibility: !this.state.isLoad ? "visible" : "hidden", }} />
                <Link to={-1} className="text-decoration-none link-regresar">← Regresar</Link>
                <section className="title-container">
                    <h2 id="nombre-producto">{this.state.product.nombre}</h2>
                </section>
                <section className={this.state.isMobile ? "block" : "flex"}>
                    <section className="align-content-center">
                        <img className="imagen-producto" src={this.state.product.imagen} />
                    </section>
                    <section className="container-info">
                        <div id="borde-info">
                            {this.state.product.descripcion?.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })}
                        </div>
                        <BotonAHuevo linkTo="#" className={"block mx-auto"}>
                            Comprar
                            <span>
                                <img src={carritoIcon} alt="carrito icon" id="carrito-icon" onLoad={this.cargado.bind(this)} />
                            </span>
                        </BotonAHuevo>
                    </section>
                </section>
            </>
        )
    }
}

export const ProductoVista = withRouter(ProductoVistaClass)