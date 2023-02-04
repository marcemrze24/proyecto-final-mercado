// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTj5kRzazT2eEmP2oHEvH_CbXqXKcBM2I",
    authDomain: "shopper-ecommerce-d7466.firebaseapp.com",
    projectId: "shopper-ecommerce-d7466",
    storageBucket: "shopper-ecommerce-d7466.appspot.com",
    messagingSenderId: "257695126887",
    appId: "1:257695126887:web:31895cdca1192240ee4bc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
