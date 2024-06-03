
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_b89YmdwF29TMdeilUefKUPakn15aWGc",
  authDomain: "fir-authentication-b8643.firebaseapp.com",
  projectId: "fir-authentication-b8643",
  storageBucket: "fir-authentication-b8643.appspot.com",
  messagingSenderId: "18483585075",
  appId: "1:18483585075:web:3bbdc8e78b178b34930346"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

};
