import 'bootstrap';
import '../sass/main.scss';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA84ltXsEbdwWnJFYzesDPUrGjL0RDKflo',
  authDomain: 'jcu-career-link.firebaseapp.com',
  databaseURL: 'https://jcu-career-link.firebaseio.com',
  projectId: 'jcu-career-link',
  storageBucket: 'jcu-career-link.appspot.com',
  messagingSenderId: '337866042725',
  appId: '1:337866042725:web:7caf389b88b7f0da74858c'
};

firebase.initializeApp(firebaseConfig);
