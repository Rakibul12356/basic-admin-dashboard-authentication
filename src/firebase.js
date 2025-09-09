import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCOvhtvYICsl12tKRUf4gdJJ0XyBjVuwJI",
  authDomain: "basic-admin-dashboa.firebaseapp.com",
  projectId: "basic-admin-dashboa",
  storageBucket: "basic-admin-dashboa.firebasestorage.app",
  messagingSenderId: "6707686042",
  appId: "1:6707686042:web:dd69202894b7003e1f4d23"
};


const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);