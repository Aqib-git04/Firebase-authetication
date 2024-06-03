
import { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from './firebase.js';
const signUp = () => {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Signed up", userCredential);
            
            Swal.fire({
                icon: 'success',
                title: 'Registered!',
                text: 'Email has been registered successfully',
              });
              window.location.href = 'signin.js';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorCode", errorCode);
            console.log("errorMessage", errorMessage);
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: errorMessage,
              });
        });
}


document.getElementById("signupBtn").addEventListener("click", signUp);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };




