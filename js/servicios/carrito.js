class CarritoService {
    URL_CARRITO = 'https://61da1fc1ce86530017e3ccda.mockapi.io/carrito/'

    async guardarCarritoService(carrito) {
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()
