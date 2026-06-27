import "./Linea.scss"
export const Linea = ({ contenido }) => {
    return (
        <section className="timeline">
            {contenido.map((item, index) => (
                <section key={index} className="timeline-item">
                    <section className="timeline-content">
                        {item}
                    </section>
                </section>
            ))}
        </section>
    )
}
