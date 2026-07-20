import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";

function FormularioProducto() {

  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: ""
  });

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "Este campo es obligatorio",
        min: "Debe tener al menos :min caracteres"
      }
    })
  );

  const handleChange = (e) => {

    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });

  };

  const guardarProducto = async (e) => {

    e.preventDefault();

    if (validator.current.allValid()) {

      try {

        await addDoc(collection(db, "productos"), producto);

        alert("Producto guardado correctamente");

        setProducto({
          nombre: "",
          precio: "",
          descripcion: ""
        });

        validator.current.hideMessages();
        forceUpdate(1);

      } catch (error) {

        console.error(error);

      }

    } else {

      validator.current.showMessages();
      forceUpdate(1);

    }

  };

  return (

    <div>

      <h3 className="text-center mb-4">
        Nuevo Producto
      </h3>

      <form onSubmit={guardarProducto}>

        <div className="mb-3">

          <label className="form-label">
            Nombre
          </label>

          <input
            type="text"
            name="nombre"
            className="form-control"
            value={producto.nombre}
            onChange={handleChange}
          />

          <div className="text-danger small">
            {validator.current.message(
              "nombre",
              producto.nombre,
              "required"
            )}
          </div>

        </div>

        <div className="mb-3">

          <label className="form-label">
            Precio
          </label>

          <input
            type="number"
            name="precio"
            className="form-control"
            value={producto.precio}
            onChange={handleChange}
          />

          <div className="text-danger small">
            {validator.current.message(
              "precio",
              producto.precio,
              "required"
            )}
          </div>

        </div>

        <div className="mb-3">

          <label className="form-label">
            Descripción
          </label>

          <textarea
            name="descripcion"
            className="form-control"
            value={producto.descripcion}
            onChange={handleChange}
          />

          <div className="text-danger small">
            {validator.current.message(
              "descripcion",
              producto.descripcion,
              "required|min:10"
            )}
          </div>

        </div>

        <button className="btn btn-success w-100">
          Guardar Producto
        </button>

      </form>

    </div>

  );

}

export default FormularioProducto;