import { Component, createRef } from "react";
import "./Recetas.scss"
import { Link } from "react-router-dom";
import CardRecetas from "../../components/CardRecetas/index.js";
import Card from "../../components/Card/index.js"
import iconHuevo from "../../assets/icons/huevo-receta.png"
import iconSarten from "../../assets/icons/sarten.png"
import iconSandwich from "../../assets/icons/sandwich.png"
import iconTaco from "../../assets/icons/taco.png"
import iconHealthy from "../../assets/icons/healthy-recipe.png"
import iconReloj from "../../assets/icons/reloj-receta.png"
import iconFamilia from "../../assets/icons/familia.png"
import iconCalendario from "../../assets/icons/calendario.png"
import iconHuevoSvg from "../../assets/icons/huevo-distribucion.svg"
import iconCalidad from "../../assets/icons/calidad.svg"
import iconFamilia2 from "../../assets/icons/proceso-distribucion/5.png"
import iconTienda from "../../assets/icons/tienda.png"
import imgRecetario from "../../assets/recetario-01.webp"
import imgTortillaEspañola from "../../assets/tortilla-espannola.jpg"
import imgHuevosALaMexicana from "../../assets/huevos-mexicana.jpg"
import imgTacoHuevoChorizo from "../../assets/taco-huevo-chorizo.jpg"
import imgFlanNapolitano from "../../assets/flan-napolitano.jpg"
import Loader from "../../components/Loader/index.js"
import Styles from "../../utils/styles.js"
import { waitForImages } from "../../utils/logica.js"

class Recetas extends Component {

    icons = {
        iconHuevo,
        iconSarten,
        iconSandwich,
        iconTaco,
        iconHealthy,
        iconReloj,
        iconFamilia,
        iconCalendario,
        iconHuevoSvg,
        iconCalidad,
        iconFamilia2,
        iconTienda
    }

    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            isLoaded: false,
        }
        this.ref = createRef()
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        waitForImages(this.ref).then(() => {
            this.setState({ isLoaded: true });
        }).catch((e) => {
            console.log(e);
            this.setState({ isLoaded: true });
        });
    }

    handleResize = () => {
        this.setState({ isMobile: window.innerWidth < 600 });
    }

    render() {
        return (
            <section ref={this.ref}>
                <Loader style={{ ...Styles.overlayLoading, opacity: !this.state.isLoaded ? 1 : 0, visibility: !this.state.isLoaded ? "visible" : "hidden", }} />
                <div className="hero-section-recetas">
                    <div className="hero-overlay"></div>
                    <div className="hero-content-recetas">
                        <a id="" className="text-decoration-none" href="/downloads/Recetario.pdf" download="Recetario.pdf"><section>Descargar Recetario</section></a>
                    </div>
                </div>
                <section id="recetas-subcontainer">
                    <h2>Explora recetas para cada momento</h2>
                    <div id="cards-recetas-container">
                        <Link className="text-decoration-none">
                            <Card className="card-etiquetas">
                                <img src={this.icons.iconHuevo} alt="huevo" />
                                <h2>Desayunos</h2>
                            </Card>
                        </Link>
                        <Link className="text-decoration-none">
                            <Card className="card-etiquetas">
                                <img src={this.icons.iconSarten} alt="sarten" />
                                <h2>Huevos al gusto</h2>
                            </Card>
                        </Link>
                        <Link className="text-decoration-none">
                            <Card className="card-etiquetas">
                                <img src={this.icons.iconSandwich} alt="sandwich" />
                                <h2>Lunch escolar</h2>
                            </Card>
                        </Link>
                        <Link className="text-decoration-none">
                            <Card className="card-etiquetas">
                                <img src={this.icons.iconTaco} alt="taco" />
                                <h2>Comida mexicana</h2>
                            </Card>
                        </Link>
                        <Link className="text-decoration-none">
                            <Card className="card-etiquetas">
                                <img src={this.icons.iconHealthy} alt="healthy" />
                                <h2>Saludables</h2>
                            </Card>
                        </Link>
                        <Link className="text-decoration-none">
                            <Card className="card-etiquetas">
                                <img src={this.icons.iconReloj} alt="reloj" />
                                <h2>Rápidas <br /> (menos de 15 minutos)</h2>
                            </Card>
                        </Link>
                        <Link className="text-decoration-none">
                            <Card className="card-etiquetas">
                                <img src={this.icons.iconFamilia} alt="familia" />
                                <h2>Familiares</h2>
                            </Card>
                        </Link>
                        <Link className="text-decoration-none">
                            <Card className="card-etiquetas">
                                <img src={this.icons.iconCalendario} alt="calendario" />
                                <h2>Temporadas especiales</h2>
                            </Card>
                        </Link>
                    </div>
                    <div className="container-recetas-destacadas">
                        <h2>⭐ Recetas destacadas</h2>
                        <Link to="/recetas/" className="text-decoration-none" hidden={this.state.isMobile}>Ver todas las recetas →</Link>
                    </div>
                    <div id="cards-recetas-destacadas">
                        <Link className="text-decoration-none">
                            <CardRecetas title={"Tortilla Española"} description={"La receta tradicional"} tiempo={"40 minutos"} dificultad={"Media"} image={imgTortillaEspañola} />
                        </Link>
                        <Link className="text-decoration-none">
                            <CardRecetas title={"Huevos a la Mexicana"} description={"La receta tradicional"} tiempo={"15 minutos"} dificultad={"Media"} image={imgHuevosALaMexicana} />
                        </Link>
                        <Link className="text-decoration-none">
                            <CardRecetas title={"Tacos de Huevo con CHorizo"} description={"La receta tradicional"} tiempo={"20 minutos"} dificultad={"Media"} image={imgTacoHuevoChorizo} />
                        </Link>
                        <Link className="text-decoration-none">
                            <CardRecetas title={"Flan Napolitano"} description={"La receta tradicional"} tiempo={"1+ hora"} dificultad={"Difícil"} image={imgFlanNapolitano} />
                        </Link>
                    </div>
                    <div className="container-recetas-destacadas">
                        <Link to="/recetas/" className="text-decoration-none" hidden={!this.state.isMobile}>Ver todas las recetas →</Link>
                    </div>
                    <section className={
                        this.state.isMobile ? 'block' : 'flex gap-2vmax pb-5vmin'
                    }>
                        <div id="container-por-que">
                            <h2>¿Por qué cocinar con Huevo Los Arcos?</h2>
                            <div className={this.state.isMobile ? 'block' : 'flex gap-1pct'}>
                                <section>
                                    <div>
                                        <img src={this.icons.iconHuevoSvg} />
                                    </div>
                                    <h4>Frescura garantizada</h4>
                                </section>
                                <section>
                                    <div>
                                        <img src={this.icons.iconCalidad} alt="calidad" />
                                    </div>
                                    <h4>Selección de calidad</h4>
                                </section>
                                <section>
                                    <div>
                                        <img src={this.icons.iconFamilia2} alt="familia" />
                                    </div>
                                    <h4>Ideal para toda la familia</h4>
                                </section>
                                <section>
                                    <div>
                                        <img src={this.icons.iconTienda} alt="tienda" />
                                    </div>
                                    <h4>Disponible en tu tienda favorita</h4>
                                </section>
                            </div>
                        </div>
                        <div id="container-descarga-recetario">
                            <section>
                                <h2>Descarga gratis nuestro recetario</h2>
                                <div>
                                    <p className="descripcion">Más de 50 recetas prácticas para todos los días</p>
                                    <a href="/downloads/Recetario.pdf" download="Recetario.pdf" className="text-decoration-none"><section>Descargar Recetario</section></a>
                                </div>
                            </section>
                            <section>
                                <img src={imgRecetario} alt="" />
                            </section>
                        </div>
                    </section>
                </section>
                <div id="prefooter-recetas">
                    <div className="content">
                        <h2>Del gallinero a tu mesa</h2>
                        <p>Calidad y frescura en cada huevo</p>
                        <div className="">
                            <Link className="text-decoration-none" to={"/huevo/contacto"} ><section>Contactar Distribuidor</section></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export { Recetas }