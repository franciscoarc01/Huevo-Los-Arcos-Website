import { Component } from "react";
import './Ventas.scss';

class Ventas extends Component {
    render() {
        return (
            <>
                <div className="hero-section-ventas">
                    <div className="hero-overlay"></div>
                    <div className="hero-content-ventas">
                        <p>
                            Ventas
                        </p>
                        <div>
                            {/* <BotonAHuevo linkTo="#">CONOCE NUESTROS PRODUCTOS <span>&gt;</span></BotonAHuevo> */}
                        </div>
                    </div>
                </div>
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

                        <a href="mailto:contacto@huevolosarcos.net" className="empresa-contact-link" target="_blank">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                                contacto@huevolosarcos.net
                            </div>
                        </a>
                    </section>
                    <div id="imagen-servicio">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&amp;q=80" alt="Ventas al mayoreo" />
                    </div>
                </div>
            </>
        )
    }
}

export { Ventas }

