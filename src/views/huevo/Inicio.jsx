import { Component, useEffect, useState, useRef } from "react"
import { Routes, Route, Link } from "react-router-dom"
import FooterHuevo from "../../components/FooterHuevo/index"
import HeaderHuevo from "../../components/HeaderHuevo/index"
import BotonAHuevo from "../../components/BotonAHuevo/index"
import "./Inicio.scss"
import imagenNosotros from "../../assets/nosotros-huevo.png"
import Carousel from "../../components/Carrusel/index"
import HOTCAKES from "../../assets/HOTCAKES.jpg"
import PanDeMuerto from "../../assets/pan_de_muerto.jpg"
import PanDeDulce from "../../assets/Pan-de-dulce-conchas.jpg"
import Pastel from "../../assets/pastel.jpg"
import Mayonesa from "../../assets/por-que-se-corta-la-mayonesa-1200x550-cc.jpg"
import HojaIcon from "../../assets/icons/leaf-solid-full.svg"
import PolloIcon from "../../assets/icons/pollo.svg"
import ShieldCheckIcon from "../../assets/icons/shield-check.svg"
import CorazonIcon from "../../assets/icons/heart-regular-full.svg"
import CorreoIcon from "../../assets/icons/correo.svg"
import CamionIcon from "../../assets/icons/camioncito.svg"
import CardProductos from "../../components/CardProductos/index.js"
import ClientesSatisfechosIcon from "../../assets/icons/clientes-satisfechos.svg"
import AnnosExperienceIcon from "../../assets/icons/annos-experiencia.svg"
import HuevosDiariosIcon from "../../assets/icons/huevos-diarios.svg"
import { Nosotros } from "./Nosotros.jsx"
import { Calidad } from "./Calidad.jsx"
import { Distribucion } from "./Distribucion.jsx"
import { Contacto } from "./Contacto.jsx"
import { Recetas } from "./Recetas.jsx"
import { Ventas } from "./Ventas.jsx"
import { Helmet } from "react-helmet-async";
import { Productos } from "./Productos.jsx"
import { ProductoVista } from "./ProductoVista.jsx"
import { waitForImages } from "../../utils/logica.js"
import Styles from "../../utils/styles.js"
import Loader from "../../components/Loader/index.js"

const slides = [
    { id: 1, path: HOTCAKES, url: "/huevo/recetas/" },
    { id: 2, path: PanDeMuerto, url: "/huevo/recetas/" },
    { id: 3, path: PanDeDulce, url: "/huevo/recetas/" },
    { id: 4, path: Pastel, url: "/huevo/recetas/" },
    { id: 5, path: Mayonesa, url: "/huevo/recetas/" }
];

class Inicio extends Component {

    componentDidMount() {
        const cabeza = document.head
        const iconLink = document.createElement("link")
        iconLink.rel = "icon"
        iconLink.type = "image/svg+xml"
        iconLink.href = "/Logo-Los-Arcos.svg"
        cabeza.appendChild(iconLink)
        document.title = "Huevo Los Arcos"
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta name="description" content="Somos una empresa especializada en la producción, selección, empaque y comercialización de huevo blanco" />
                    <meta name="keywords" content="huevo, huevo blanco, huevo los arcos, huevos los arcos" />
                    <meta name="author" content="Huevo Los Arcos" />
                </Helmet>
                <section className="relative">
                    <HeaderHuevo />
                    <Routes basename="huevo">
                        <Route path="/" element={<Contenido />} />
                        <Route path="ventas" element={<Ventas />} />
                        <Route path="nosotros" element={<Nosotros />} />
                        <Route path="calidad" element={<Calidad />} />
                        <Route path="distribucion" element={<Distribucion />} />
                        <Route path="contacto" element={<Contacto />} />
                        <Route path="recetas" element={<Recetas />} />
                        <Route path="productos">
                            <Route index element={<Productos />} />
                            <Route path=":id" element={<ProductoVista />} />
                        </Route>
                    </Routes>
                </section>
                <FooterHuevo />
            </>
        )
    }
}

const Contenido = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const ref = useRef(null)
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 600); // Define 600px como el breakpoint para móviles
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Llamada inicial para establecer el estado correcto
        console.log(ref)
        waitForImages(ref).then(() => {
            setIsLoaded(true)
        });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={ref}>
            <Loader style={{ ...Styles.overlayLoading, opacity: !isLoaded ? 1 : 0, visibility: !isLoaded ? "visible" : "hidden" }} />
            <div className="hero-section-inicio">
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content-inicio">
                    <p>
                        En Huevo Los Arcos nos comprometemos a llevar a tu mesa huevos frescos,
                        nutritivos y de la más alta calidad.
                    </p>
                    <div>
                        <BotonAHuevo linkTo="/huevo/productos">CONOCE NUESTROS PRODUCTOS →</BotonAHuevo>
                    </div>
                </div>
            </div>
            <div className={
                isMobile ?
                    "block" :
                    "inline-flex"} id="puntos-clave">
                <div className="punto-clave">
                    <img src={HojaIcon} className="iconos-clave" loading="eager" fetchpriority="high" />
                    <div>
                        <text className="punto-clave-titulo">100% NATURALES</text>
                        <p className="punto-clave-descripcion">
                            Alimentación balanceada para gallinas sanas
                            y huevos de cantidad.
                        </p>
                    </div>
                </div>
                <div className="punto-clave">
                    <img src={PolloIcon} className="iconos-clave" loading="eager" fetchpriority="high" />
                    <div>
                        <text className="punto-clave-titulo">FRESCOS TODOS LOS DIAS</text>
                        <p className="punto-clave-descripcion">
                            Recolección diaria que garantiza
                            frescura y sabor en cada huevo
                        </p>
                    </div>
                </div>
                <div className="punto-clave">
                    <img src={ShieldCheckIcon} className="iconos-clave" loading="eager" fetchpriority="high" />
                    <div>
                        <text className="punto-clave-titulo">ALTOS ESTÁNDARES</text>
                        <p className="punto-clave-descripcion">
                            Procesos certificados que aseguran calidad e higiene
                            en cada etapa
                        </p>
                    </div>
                </div>
                <div className="punto-clave">
                    <img src={CorazonIcon} className="iconos-clave" loading="eager" fetchpriority="high" />
                    <div>
                        <text className="punto-clave-titulo">NUTRITIVOS Y SALUDABLES</text>
                        <p className="punto-clave-descripcion">
                            Ricos en proteina, vitaminas y minerales para una dieta balanceada
                        </p>
                    </div>
                </div>
            </div>
            <div id="container-productos">
                <h2>
                    NUESTROS PRODUCTOS
                </h2>
                <p >
                    Variedad que se adapta a tí
                </p>
                <section className={
                    isMobile ?
                        "block" :
                        "flex gap-2vmax"
                }>
                    <CardProductos
                        image={"/images/productos/12huevos.jpg"}
                        title="12 PIEZAS"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/1",
                                btnlabel: "VER PRODUCTO",
                                className: isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={"/images/productos/18huevos.jpg"}
                        title="24 PIEZAS"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/2",
                                btnlabel: "VER PRODUCTO",
                                className: isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={"/images/productos/30huevos.jpg"}
                        title="30 PIEZAS"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/3",
                                btnlabel: "VER PRODUCTO",
                                className: isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                    <CardProductos
                        image={"/images/productos/caja-90.png"}
                        title="CAJA 90 PIEZAS"
                        buttonProps={
                            {
                                linkTo: "/huevo/productos/4",
                                btnlabel: "VER PRODUCTO",
                                className: isMobile ? "mg-bottom-7pct" : "mg-bottom-10pct"
                            }
                        } />
                </section>
                <BotonAHuevo linkTo="/huevo/productos" className={isMobile ? "mg-bottom-7pct" : ""}>VER TODOS LOS PRODUCTOS</BotonAHuevo>
            </div>
            <div id="container-sobre-nosotros" className={isMobile ? "block" : "flex"}>
                <div id="imagen-sobre-nosotros">
                    <img src={imagenNosotros} loading="eager" fetchpriority="high" />
                </div>
                <section id="sobre-nosotros-info">
                    <section>
                        <p id="ante-titulo">SOBRE NOSOTROS</p>
                        <h2>UNA TRADICIÓN QUE SE HA GANADO TU CONFIANZA</h2>
                        <p id="parrafo">
                            Somos una empresa 100% mexicana con mas de 40 años
                            de experiencia en la producción y distribución de huevos de la
                            mas alta calidad.
                            Nuestro compromiso es contigo y con tu familia.
                        </p>
                    </section>
                    <section className="flex">
                        <div className="sobre-nosotros-icons">
                            <img src={ClientesSatisfechosIcon} loading="eager" fetchpriority="high" />
                        </div>
                        <div className="sobre-nosotros-icons">
                            <img src={HuevosDiariosIcon} loading="eager" fetchpriority="high" />
                        </div>
                        <div className="sobre-nosotros-icons">
                            <img src={AnnosExperienceIcon} loading="eager" fetchpriority="high" />
                        </div>
                    </section>
                    <BotonAHuevo linkTo="/huevo/nosotros">CONOCE MAS DE NOSOTROS</BotonAHuevo>
                </section>
            </div>
            <section id="container-recetas" className={isMobile ? "block" : "inline-flex"}>
                <div id="recetas-texto">
                    <h2>RECETAS QUE INSPIRAN</h2>
                    <p>Descubre deliciosas recetas hechas con Huevos Los Arcos</p>
                    <Link to={"/huevo/recetas"}><div>VER RECETAS</div></Link>
                </div>
                <Carousel images={slides} visible={isMobile ? 1 : 3} isMobile={isMobile} />
            </section>
            <section id="prefooter" className={isMobile ? "block" : "flex"}>
                <div className="inline-flex" id="distribuidor-container">
                    <img src={CamionIcon} className="footer-icons camion-icon" loading="eager" fetchpriority="high" />
                    <div>
                        <h2>¿ERES DISTRIBUIDOR?</h2>
                        <p>Unete a nuestra red de distribución y lleva calidad a mas hogares</p>
                        <Link id="boton-mas-info-dist" to={"/huevo/contacto"}><section>MAS INFORMACIÓN</section></Link>
                    </div>
                </div>
                <div className="inline-flex" id="notipromos-container">
                    <img src={CorreoIcon} className="footer-icons" loading="eager" fetchpriority="high" />
                    <div>
                        <h2>RECIBE NOTICIAS Y PROMOCIONES</h2>
                        <p>Suscríbete y recibe recetas, tips y beneficios exclusivos</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { Inicio }