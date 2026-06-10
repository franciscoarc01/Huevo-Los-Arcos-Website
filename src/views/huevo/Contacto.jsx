import { Component } from "react";
import { Link } from "react-router-dom";
import './Contacto.scss';
import Card from "../../components/Card/index.js";
import FacebookIcon from "../../components/FooterHuevo/icons/facebook-brands-solid-full.svg"
import InstagramIcon from "../../components/FooterHuevo/icons/instagram-brands-solid-full.svg"

class Contacto extends Component {
    render() {
        return (
            <section id="contacto-container">
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
                                    <img />
                                    <h2 className="titulo-contacto-card">Teléfono / WhatsApp</h2>
                                </div>
                                <label>+52 442 780 6888</label>
                            </Card>
                            <Card className="info-card">
                                <div>
                                    <img />
                                    <h2 className="titulo-contacto-card">Correo electrónico</h2>
                                </div>
                                <Link className="text-decoration-none" id="link-correo" to="mailto:contacto@lelemexico.com">contacto@lelemexico.com</Link>
                            </Card>
                            <Card className="info-card">
                                <div>
                                    <img />
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
                                    <Link><span><img id="" src={FacebookIcon} alt="FacebookIcon" /></span></Link>
                                    <Link><span><img id="" src={InstagramIcon} alt="InstagramIcon" /></span></Link>
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

                <div id="empresa-container">
                    <section className="empresa-info">
                        <div className="empresa-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path>
                            </svg>
                            <span>Para Empresas</span>
                        </div>
                        <h2 id="titulo">¿Tienes un restaurante o negocio de alimentos?</h2>
                        <p className="empresa-desc">
                            Ofrecemos precios especiales para mayoristas, restaurantes, hoteles, servicios de catering y distribuidores.
                        </p>
                        <ul className="empresa-features">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle>
                                </svg>
                                Entregas programadas y puntuales
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                Precios preferenciales por volumen
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                Facturación y crédito disponible
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                                Asesoría personalizada
                            </li>
                        </ul>

                        <a href="mailto:contacto@lelemexico.com" className="empresa-contact-link">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                                contacto@lelemexico.com
                            </div>
                        </a>
                    </section>
                    <div id="imagen-servicio">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&amp;q=80" alt="Ventas al mayoreo" />
                    </div>
                </div>
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