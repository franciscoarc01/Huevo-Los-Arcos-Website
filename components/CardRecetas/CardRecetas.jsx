import './CardRecetas.scss'
const CardRecetas = ({ image, title, description, tiempo, dificultad }) => {
    return (
        <>
            <div className="card-receta">
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div>
                        <span>{tiempo}</span>
                        <span className="dificultad">{dificultad}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export { CardRecetas }