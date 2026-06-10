import { Component } from "react"
import { Link } from "react-router-dom"

class FAQ extends Component {
    render() {
        return (
            <>

                <div id="hero">

                </div>
                <div className="bg-[#B07F27] text-white py-4">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                            <a href="https://wa.me/524427806888" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FAF4E6] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle">
                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z">
                                    </path>
                                </svg>
                                <span>WhatsApp: +52 442 780 6888</span>
                            </a>
                            <a href="mailto:ventaslelemx@outlook.com" className="flex items-center gap-2 hover:text-[#FAF4E6] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail">
                                    <rect width="20" height="16" x="2" y="4" rx="2">
                                    </rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                                    </path>
                                </svg>
                                <span>ventaslelemx@outlook.com</span>
                            </a>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14">
                                    </polyline>
                                </svg>
                                <span>Lun-Vie: 9:00-18:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>
                    ¿En qué podemos ayudarte?
                </h2>
                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                    <input type="text" placeholder="Buscar en preguntas frecuentes..." />
                </section>
                <div>
                    <div>
                        <h3>
                            Categorías
                        </h3>
                    </div>
                    <div>
                        <h3>Pendinte</h3>
                    </div>
                </div>
                <section>
                    <h3>Políticas y Documentos</h3>
                    <p>Pendiente de hacer componentes de las tarjetas</p>
                </section>
                <section>
                    <h2>¿No encontraste lo que buscabas?</h2>
                    <p>
                        Nuestro equipo de atención al cliente está listo para ayudarte.
                        Contáctanos por el medio que prefieras.
                    </p>
                    <section>
                        <Link to="https://wa.me/524427806888">WhatsApp</Link>
                        <Link to="mailto:ventaslelemx@outlook.com">Correo electrónico</Link>
                    </section>
                </section>
            </>
        )
    }
}

export { FAQ }