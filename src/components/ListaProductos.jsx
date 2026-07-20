import { useState } from "react";
import Producto from "./Producto";

function ListaProductos() {

    const [carrito, setCarrito] = useState([]);

    const productos = [
        { id: 1, nombre: "Notebook Lenovo", precio: 850000 },
        { id: 2, nombre: "Mouse Logitech", precio: 25000 },
        { id: 3, nombre: "Teclado Redragon", precio: 45000 },
        { id: 4, nombre: "Monitor Samsung", precio: 220000 }
    ];

    const agregarCarrito = (producto) => {

        setCarrito([...carrito, producto]);

    };

    return (

        <div>

            <h3>
                Carrito: {carrito.length} productos
            </h3>

            <hr />

            {

                productos.map((producto) => (

                    <Producto
                        key={producto.id}
                        producto={producto}
                        agregarCarrito={agregarCarrito}
                    />

                ))

            }

            <hr />

            <h3>Productos en el carrito</h3>

            <ul>

                {

                    carrito.map((item, index) => (

                        <li key={index}>
                            {item.nombre} - ${item.precio}
                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default ListaProductos;