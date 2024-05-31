import { auth, createUserWithEmailAndPassword } from './firebase.js';



let emails = [];

// Function to handle registration
const register = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    showAlert(email, password);
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User>', userCredential);
      emails.push(email);
      Swal.fire({
        icon: 'success',
        title: 'Registered!',
        text: 'Email has been registered successfully',
      }).then(() => {
       
        window.location.href = 'profile.html';
      });
      console.log('Registered emails:', emails);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode', errorCode);
      console.log('errorMessage', errorMessage);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: errorMessage,
      });
    });
};

// Function to show alert for missing fields
const showAlert = (email, password) => {
  if (!email && !password) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Email and Password are missing',
    });
  } else if (!email) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Email is missing',
    });
  } else if (!password) {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Password is missing',
    });
  }
};

// Event listener for register button
const btn = document.getElementById('registerbtn');
btn.addEventListener('click', () => {
  register();
});

export{
  register,
  showAlert
}