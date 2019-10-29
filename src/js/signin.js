import logo from '../images/JCU-Logo-coloured.svg';

document.getElementById('imgLogo').src = logo;

const btnSignIn = document.getElementById('btnSignIn');
btnSignIn.addEventListener('click', () => {
  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error);
    });
});
