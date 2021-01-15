import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA6Of0SePE-fZx-72uCszpLvI1J7WjpqyQ",
    authDomain: "geochats-5b7d5.firebaseapp.com",
    projectId: "geochats-5b7d5",
    storageBucket: "geochats-5b7d5.appspot.com",
    messagingSenderId: "657023466084",
    appId: "1:657023466084:web:a51a86d94a3f652b797d71",
    measurementId: "G-HKCC1ZFGDL"  
  };
  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  firebaseapp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseapp.firestore()
