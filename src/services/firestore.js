import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjJJSb_Nu7nKcm3LS__t6_6fCtFjmTQko",
  authDomain: "getir-case-study-68bd5.firebaseapp.com",
  projectId: "getir-case-study-68bd5",
  storageBucket: "getir-case-study-68bd5.appspot.com",
  messagingSenderId: "417238996030",
  appId: "1:417238996030:web:5c7a9eff2d9d6f71b12d6f",
  measurementId: "G-K3Y6C1WQ5N",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
