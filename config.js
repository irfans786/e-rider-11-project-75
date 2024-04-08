import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAoJT6gBOEDxTsQH1mbmYxiLNmqan3Twvc",
  authDomain: "e-library-ed5f2.firebaseapp.com",
  projectId: "e-library-ed5f2",
  storageBucket: "e-library-ed5f2.appspot.com",
  messagingSenderId: "377518259990",
  appId: "1:377518259990:web:083addf1b3dd856aad1a37"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
