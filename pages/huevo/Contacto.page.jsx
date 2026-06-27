import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import './Contacto.scss';
import Card from "../../components/Card/index.js";
import FacebookIcon from "../../components/FooterHuevo/icons/facebook-brands-solid-full.svg"
import InstagramIcon from "../../components/FooterHuevo/icons/instagram-brands-solid-full.svg"
import Loader from "../../components/Loader/index.js"
import Styles from "../../utils/styles.js"
import { waitForImages } from "../../utils/logica.js"

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        }
        this.ref = createRef()
    }

    componentDidMount() {
        waitForImages(this.ref).then(() => {
            this.setState({ isLoaded: true });
        }).catch((e) => {
            console.log(e);
            this.setState({ isLoaded: true });
        });
    }
    render() {
        return (
            <section id="contacto-container" ref={this.ref}>
                <Loader style={{ ...Styles.overlayLoading, opacity: !this.state.isLoaded ? 1 : 0, visibility: !this.state.isLoaded ? "visible" : "hidden", }} />
                <section className="hero-section-contacto">
                    <div className="hero-overlay"></div>
                    <div className="hero-content-contacto">
                        <p>
                            Contacto
                        </p>
                    </div>
                </section>
                <section className="contact-form-info-section">
                    <div className="contact-form-wrapper">
                        <h2 className="titulos">Envíanos un mensaje</h2>
                        <form>
                            <fieldset id="fieldsetInfoContact">
                                <legend>
                                    Información
                                </legend>
                                <div>
                                    <label>
                                        Nombre *
                                    </label>
                                    <input type="text" name="nombre" id="nombre" className="input-contacto" required />
                                </div>
                                <div>
                                    <label>
                                        Apellido *
                                    </label>
                                    <input type="email" name="apellido" id="apellido" className="input-contacto" required />
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Contacto
                                </legend>
                                <div>
                                    <label>
                                        Correo *
                                    </label>
                                    <input type="email" name="correo" id="correo" className="input-contacto" required />
                                </div>
                                <div>
                                    <label>
                                        Teléfono
                                    </label>
                                    <input type="tel" name="telefono" id="telefono" className="input-contacto" required />
                                </div>
                                <div>
                                    <label>
                                        Asunto *
                                    </label>
                                    <select required>
                                        <option value={0}>Selecciona una opción</option>
                                        <option value="pedido">Consulta sobre pedido</option>
                                        <option value="mayoreo">Ventas al mayoreo</option>
                                        <option value="evento">Servicio para eventos</option>
                                        <option value="colaboración">Colaboraciones</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
                                        Mensaje *
                                    </label>
                                    <textarea name="mensaje" id="mensaje" className="textarea" required />
                                </div>
                            </fieldset>
                            <section>
                                <input
                                    type="checkbox"
                                    name="accept-terms"
                                    id="accept-terms"
                                    required />
                                <label for="accept-terms">
                                    He leído y acepto el Aviso de Privacidad y
                                    autorizo el uso de mis datos para recibir información sobre productos y
                                    servicios.
                                </label>
                            </section>
                            <button type="submit">Enviar Mensaje</button>
                        </form>
                    </div>
                    <div className="contact-info-wrapper">
                        <h2 className="titulos">Información de contacto</h2>
                        <section className="contact-info-cards">
                            <Card className="info-card">
                                <div>
                                    <h2 className="titulo-contacto-card">Teléfono / WhatsApp</h2>
                                </div>
                                <label>+52 442 780 6888</label>
                            </Card>
                            <Card className="info-card">
                                <div>
                                    <h2 className="titulo-contacto-card">Correo electrónico</h2>
                                </div>
                                <Link className="text-decoration-none" id="link-correo" to="mailto:contacto@huevolosarcos.net" target="_blank">contacto@huevolosarcos.net</Link>
                            </Card>
                            <Card className="info-card">
                                <div>
                                    <h2 className="titulo-contacto-card">Dirección</h2>
                                </div>
                                <label>
                                    Primer Retorno Boulevard Universitario 1, Nave 28 C ·
                                    Parque Industrial Terra Business ·
                                    76269,
                                    Querétaro, Qro., México
                                </label>
                            </Card>
                            <Card className="info-card">
                                <h2 className="titulo-contacto-card">Síguenos en redes</h2>
                                <section id="">
                                    <Link to="https://www.facebook.com/share/1CS7hu2wTA/?mibextid=wwXIfr" target="_blank"><span><img id="" src={FacebookIcon} alt="FacebookIcon" /></span></Link>
                                    <Link to="https://www.instagram.com/huevo.losarcos?igsh=MXZoamhnOG5vd3d2OA==" target="_blank"><span><img id="" src={InstagramIcon} alt="InstagramIcon" /></span></Link>
                                </section>
                            </Card>
                        </section>
                    </div>
                </section>
                <section id="map-container">
                    <h2>Nuestra ubicación</h2>
                    <section id="iframe-container">
                        {/* <iframe
                        title="Mapa de ubicación"
                        src="TU_URL_DE_GOOGLE_MAPS"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    /> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.244629360806!2d-100.33305826826178!3d20.65962425000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35c6b909ad28d%3A0xc75c8b31f94aab23!2s76269%20Parque%20Industrial%20Terra%20Business%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1779822833290!5m2!1ses-419!2smx"
                            height="450"
                            width="100%"
                            loading="lazy"></iframe>
                        <p className="">
                            Primer Retorno Boulevard Universitario 1, Nave 28 C ·
                            Parque Industrial Terra Business ·
                            76269,
                            Querétaro, Qro., México
                        </p>
                    </section>
                </section>

                <div id="soporte-rapido-container">
                    <h2>¿Necesitas Soporte Inmediato?</h2>
                    <p className="soporte-desc">
                        Visita nuestra sección de preguntas frecuentes o contáctanos por WhatsApp para respuestas inmediatas.
                    </p>
                    <section>
                        <Link to="/huevo/contacto/faq" className="text-decoration-none" id="ver-faq">
                            Ver FAQ
                        </Link>
                        <Link to="https://wa.me/524427806888" className="text-decoration-none" id="whatsapp-contacto">
                            WhatsApp
                        </Link>
                    </section>
                </div>
            </section>
        )
    }
}

export { Contacto }