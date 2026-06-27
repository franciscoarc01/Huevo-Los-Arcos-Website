import { Component } from "react";
import { Link } from "react-router-dom";

class Valores extends Component {
    render() {
        return (
            <div>
                <div id="hero">

                </div>
                <section>
                    <div>
                        <h2>Más que Carnitas, una Filosofía de Vida</h2>
                        <p>
                            En Carnitas Lele creemos que la comida es un vehículo para preservar cultura,
                            generar comunidad y compartir felicidad.
                        </p>
                    </div>
                    <div>
                        Cuadricula
                    </div>
                </section>
                <div>
                    <h3>"La tradición no es adorar las cenizas, sino preservar el fuego"</h3>
                    <p>
                        Esta frase guía nuestra misión:
                        mantener viva la esencia de las carnitas tradicionales mientras evolucionamos para las nuevas generaciones.
                    </p>
                    <Link to="/carnitas/historia" className="text-decore-none">
                        <div>
                            Conoce Nuestra Historia
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export { Valores }