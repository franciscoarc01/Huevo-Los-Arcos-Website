
export const getProductoById = (id) => {
    return fetch("/mocks/productos.json")
        .then(response => response.json())
        .then(data => data.find(producto => producto.id == id))
}