import { useState } from "react";
import { storage } from "../services/firebase";
import {
  ref,
  uploadBytesResumable
} from "firebase/storage";

function Storage() {

  const [archivo, setArchivo] = useState(null);

  const [progreso, setProgreso] = useState(0);

  const seleccionarArchivo = (e) => {

  const archivoSeleccionado = e.target.files[0];

  console.log("Archivo seleccionado:", archivoSeleccionado);

  setArchivo(archivoSeleccionado);

};

 const subirArchivo = () => {

  console.log("Botón subir presionado");

  if (!archivo) {

    alert("Seleccione un archivo");

    return;

  }

    const storageRef = ref(storage, "archivos/" + archivo.name);

    const uploadTask = uploadBytesResumable(
      storageRef,
      archivo
    );

    uploadTask.on(

      "state_changed",

      (snapshot) => {

        const progress =
          (snapshot.bytesTransferred /
            snapshot.totalBytes) * 100;

        setProgreso(progress);

        console.log(
          "Progreso de la subida: " +
            progress +
            "%"
        );

      },

      (error) => {

        console.error(
          "Error al subir archivo:",
          error
        );

      },

      () => {

        alert("Subida completada");

      }

    );

  };

  return (

    <div className="mt-5">

      <h3>Firebase Storage</h3>

      <input
        type="file"
        className="form-control mb-3"
        onChange={seleccionarArchivo}
      />

      <button
        className="btn btn-warning"
        onClick={subirArchivo}
      >
        Subir Archivo
      </button>

      <div className="mt-3">

        <strong>

          Progreso: {progreso.toFixed(0)}%

        </strong>

        <div className="progress mt-2">

          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progreso}%`
            }}
          >
            {progreso.toFixed(0)}%
          </div>

        </div>

      </div>

    </div>

  );

}

export default Storage;