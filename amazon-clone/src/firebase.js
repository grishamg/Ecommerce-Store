// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBYtQRGnK7PpW-ogBATci1l8E89rTyZ9xA",
  authDomain: "clone-c263c.firebaseapp.com",
  projectId: "clone-c263c",
  storageBucket: "clone-c263c.appspot.com",
  messagingSenderId: "976506453571",
  appId: "1:976506453571:web:b2ffe8e969a52c5d3adef6",
  measurementId: "G-PKWQFRKWC6",
};

const firebaseApp = firebase.initializeApp( firebaseConfig );

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
