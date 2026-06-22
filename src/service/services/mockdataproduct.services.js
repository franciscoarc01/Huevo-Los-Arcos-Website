import productosData from "../../../public/mocks/productos.json"

export const getProductoById = (id) => {
    return new Promise((resolve) => {
        const data = productosData.find(producto => producto.id == id)
        resolve(data)
    })
}