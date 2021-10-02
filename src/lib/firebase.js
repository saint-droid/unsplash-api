import * as Firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
 const config = {
    apiKey: "AIzaSyD2sRqBJoRb1dioX276z-rydzLE1fMPDVQ",
    authDomain: "instagram-dbf9c.firebaseapp.com",
    projectId: "instagram-dbf9c",
    storageBucket: "instagram-dbf9c.appspot.com",
    messagingSenderId: "484667710493",
    appId: "1:484667710493:web:964aba758aa3c2b735faf4",
    measurementId: "G-BN035T0XH4"
 };
 const firebase = Firebase.initializaApp(config);
 const {FieldValue} = Firebase.Firestore;
 export{firebase, FieldValue}