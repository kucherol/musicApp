import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCzYWzCMXjhQoqjw_GN0rU-wKEVxtyzTxY',
  authDomain: 'music-6d157.firebaseapp.com',
  projectId: 'music-6d157',
  storageBucket: 'music-6d157.appspot.com',
  appId: '1:662286957280:web:93232eb66d26707005ee85',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection('users');

export { db, auth, usersCollection };
