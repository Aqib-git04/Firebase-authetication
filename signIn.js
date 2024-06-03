import { auth, createUserWithEmailAndPassword } from './firebase.js';

const signIn = () => {
  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  if (!email || !password) {
    showAlert(email, password);
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('User>', userCredential);
     
      Swal.fire({
        icon: 'success',
        title: 'Registered!',
        text: 'signed in',
      })
      window.location.href='profile.html'
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



const btn = document.getElementById('logIn');
btn.addEventListener('click', () => {
  signIn();
});

