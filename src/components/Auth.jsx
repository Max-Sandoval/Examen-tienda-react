import { useState } from "react";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrarUsuario = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuario registrado:", userCredential.user);
        alert("Usuario registrado correctamente");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  const iniciarSesion = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sesión iniciada:", userCredential.user);
        alert("Inicio de sesión exitoso");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  return (
    <div className="mt-5">
      <h3>Autenticación</h3>

      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary me-2"
        onClick={registrarUsuario}
      >
        Registrar
      </button>

      <button
        className="btn btn-success"
        onClick={iniciarSesion}
      >
        Iniciar sesión
      </button>
    </div>
  );
}

export default Auth;