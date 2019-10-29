const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', () => {
  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;
  const passwordConfirm = document.getElementById('inputPasswordConfirm').value;
  if (password === passwordConfirm)
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
});

firebase.auth().createUserWithEmailAndPassword('staff@jcu.edu.au', 'Testy!@1');
