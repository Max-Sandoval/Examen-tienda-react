# Tienda React

## Descripción

Este proyecto fue desarrollado como parte de la asignatura Programación de Componentes de Iplacex.

La aplicación fue creada con React y permite mostrar una lista de productos, agregar nuevos productos mediante un formulario validado y almacenar la información en Firebase Firestore. Además, se implementó autenticación con Firebase Auth y la estructura para utilizar Firebase Storage.

Posteriormente, la aplicación fue exportada a Android mediante Cordova, generando un archivo APK firmado y optimizado.

---

## Tecnologías utilizadas

- React
- Vite
- JavaScript (JSX)
- Bootstrap 5
- Firebase Firestore
- Firebase Authentication
- Firebase Storage
- React Simple Validator
- Cordova
- Android Studio
- Gradle

---

## Funcionalidades

- Listado de productos mediante componentes React.
- Comunicación entre componentes utilizando Props.
- Manejo de estado con useState.
- Formularios con validación utilizando react-simple-validator.
- Almacenamiento de productos en Firebase Firestore.
- Registro de usuarios mediante Firebase Authentication.
- Implementación de Firebase Storage para carga de archivos.
- Diseño responsivo utilizando Bootstrap.
- Generación y prueba de APK para Android.

---

## Instalación

1. Clonar el repositorio.

```bash
git clone https://github.com/Max-Sandoval/Examen-tienda-react.git
```

2. Ingresar al proyecto.

```bash
cd tienda-react
```

3. Instalar las dependencias.

```bash
npm install
```

4. Ejecutar el proyecto.

```bash
npm run dev
```

---

## Compilar para producción

```bash
npm run build
```

---

## Exportación a Android

Se utilizó Cordova para generar el proyecto Android.

Comandos utilizados:

```bash
cordova create TiendaAPK
cd TiendaAPK
cordova platform add android
cordova build android
```

Posteriormente se realizó:

- Firma del APK mediante Jarsigner.
- Optimización del APK utilizando Zipalign.
- Prueba de funcionamiento en el emulador de Android Studio.

---

## Estructura del proyecto

```
tienda-react/
│
├── public/
├── src/
│   ├── components/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Autor

Maximiliano Sandoval Mujica**
Ingeniería en Informática
Iplacex
2026
