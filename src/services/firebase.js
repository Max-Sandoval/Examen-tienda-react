import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0LZ_sSXXN9kEPpqnEqAsZMpdkdweomuE",
  authDomain: "tienda-react-d3e9a.firebaseapp.com",
  projectId: "tienda-react-d3e9a",
  storageBucket: "tienda-react-d3e9a.firebasestorage.app",
  messagingSenderId: "871504212162",
  appId: "1:871504212162:web:41f24e1085f0d9bfc94b5b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { db, auth, storage };