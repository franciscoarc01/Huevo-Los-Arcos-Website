import { Component } from "react";
import { Link } from "react-router-dom";

class Contacto extends Component {
    render() {
        return (
            <section>
                <div><h2>Envianos un mensaje</h2></div>
                <div><h2>Información de contacto</h2></div>
                <h2>Nuestra ubicación</h2>
                <section>
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
                        width="600"
                        height="450"
                        loading="lazy"></iframe>
                </section>
                <p className="text-center text-gray-600 mt-4">
                    Primer Retorno Boulevard Universitario 1, Nave 28 C ·
                    Parque Industrial Terra Business ·
                    76269,
                    Querétaro, Qro., México
                </p>
                <section className="py-20 bg-gray-900">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-building2 lucide-building-2 w-10 h-10 text-[#B49659]">
                                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z">
                                        </path>
                                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2">
                                        </path>
                                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2">
                                        </path><path d="M10 6h4">
                                        </path><path d="M10 10h4">
                                        </path><path d="M10 14h4">
                                        </path><path d="M10 18h4">
                                        </path>
                                    </svg>
                                    <span className="text-[#B49659] font-semibold uppercase tracking-wider text-sm">
                                        Para Empresas
                                    </span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                    ¿Tienes un restaurante o negocio de alimentos?
                                </h2>
                                <p className="text-gray-300 mb-6 text-lg">
                                    Ofrecemos precios especiales para mayoristas,
                                    restaurantes,
                                    hoteles,
                                    servicios de catering y distribuidores.
                                    Simplifica tu operación con carnitas listas para servir.
                                </p><ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck w-5 h-5 text-[#B49659]">
                                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2">
                                            </path>
                                            <path d="M15 18H9">
                                            </path>
                                            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14">
                                            </path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle>
                                        </svg>Entregas programadas y puntuales
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-5 h-5 text-[#B49659]">
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335">
                                            </path>
                                            <path d="m9 11 3 3L22 4">
                                            </path>
                                        </svg>Precios preferenciales por volumen
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-[#B49659]"><path d="M21.801 10A10 10 0 1 1 17 3.335">
                                        </path>
                                            <path d="m9 11 3 3L22 4">
                                            </path>
                                        </svg>Facturación y crédito disponible
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-5 h-5 text-[#B49659]">
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335">
                                            </path>
                                            <path d="m9 11 3 3L22 4">
                                            </path>
                                        </svg>Asesoría personalizada
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-4"><a href="https://wa.me/524427806888?text=Hola,%20me%20interesa%20información%20sobre%20ventas%20al%20mayoreo" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition-colors font-semibold flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle">
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z">
                                        </path>
                                    </svg>WhatsApp Mayoreo</a>
                                    <a href="mailto:ventaslelemx@outlook.com" className="bg-[#B07F27] text-white px-6 py-3 rounded-lg hover:bg-[#B49659] transition-colors font-semibold flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                                            <rect width="20" height="16" x="2" y="4" rx="2">
                                            </rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                                            </path>
                                        </svg>ventaslelemx@outlook.com
                                    </a>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&amp;q=80" alt="Ventas al mayoreo" className="rounded-2xl shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <h2>¿Necesitas Soporte Inmediato?</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Visita nuestra sección de preguntas frecuentes o contáctanos por WhatsApp para respuestas inmediatas.
                    </p>
                    <section>
                        <Link to="/carnitas/contacto/faq">Ver FAQ</Link>
                        <Link to="https://wa.me/524427806888">WhatsApp</Link>
                    </section>
                </div>
            </section>
        )
    }
}

export { Contacto }