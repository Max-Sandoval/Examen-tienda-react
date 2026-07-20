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
git clone URL_DEL_REPOSITORIO
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
