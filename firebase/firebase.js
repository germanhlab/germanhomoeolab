import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwC0zRSwz5AvV-oFnmuN7YquqxFaWfXAM",
  authDomain: "german-homoeo-lab-web.firebaseapp.com",
  projectId: "german-homoeo-lab-web",
  storageBucket: "german-homoeo-lab-web.appspot.com",
  messagingSenderId: "581798971838",
  appId: "1:581798971838:web:334f425f3873eb72e491ef",
  measurementId: "G-H6WMPTLJ4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);