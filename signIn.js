import { auth, createUserWithEmailAndPassword, sendPasswordResetEmail } from './firebase.js';

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
      console.log('Registered emails:', email);
      window.location.href = 'profile.html'
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

// Send email to user

const spr = () => {
  const email = document.getElementById('signinEmail').value;
  sendPasswordResetEmail(auth, email)
    .then((res) => {
      console.log("Password reset email sent!");
      Swal.fire({
        icon: 'success',
        text: `Reset Email has been sent to ${email}`,
      });
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "errorCode");
      console.log(errorMessage, "errorMessage");
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Email is missing',
      });
    });
}

const forgetPassword = document.getElementById('forgetPassword');
forgetPassword.addEventListener('click', spr);

const btn = document.getElementById('logIn');
btn.addEventListener('click', () => {
  signIn();
});
