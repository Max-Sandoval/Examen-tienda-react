function Producto({ producto, agregarCarrito }) {

    return (

        <div
            style={{
                border: "1px solid gray",
                padding: "15px",
                marginBottom: "10px"
            }}
        >

            <h4>{producto.nombre}</h4>

            <p>

                Precio: ${producto.precio}

            </p>

            <button
                onClick={() => agregarCarrito(producto)}
            >
                Agregar al carrito
            </button>

        </div>

    );

}

export default Producto;