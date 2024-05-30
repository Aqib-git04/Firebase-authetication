import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const register = () => {
   const email = document.getElementById("email");
   const password = document.getElementById("password");
   console.log(email.value, password.value)
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
   
      console.log("User>", userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });
}

const btn = document.getElementById("registerbtn");
btn.addEventListener("click", register);
