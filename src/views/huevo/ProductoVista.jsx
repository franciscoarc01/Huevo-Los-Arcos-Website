import { Component } from "react"
import { withRouter } from "../../utils/utils.js"
import { getProductoById } from "../../service/client.js"

class ProductoVistaClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
        console.log("props", props)
    }

    componentDidMount() {
        getProductoById(this.props.params.id).then(data => {
            console.log("data", data)
            this.setState({ product: data })
        })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <h2>{this.state.product.nombre}</h2>
                <section>
                    <section>
                        <img src={this.state.product.imagen} />
                    </section>
                    <section>

                    </section>
                </section>
            </>
        )
    }
}

export const ProductoVista = withRouter(ProductoVistaClass)


