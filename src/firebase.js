import firebase from 'firebase/app';
import 'firebase/auth';

// THIS auth IS CONSTANTLY BEEN USED IN EVERY FILE WHICH SAYS IMPORT {auth}
export const auth =  firebase.initializeApp({
    apiKey: "AIzaSyDHg5SrO4VY2pVuWV-20YyVTIK-YWnaFPM",
    authDomain: "unichatapp-e9df4.firebaseapp.com",
    projectId: "unichatapp-e9df4",
    storageBucket: "unichatapp-e9df4.appspot.com",
    messagingSenderId: "59875329255",
    appId: "1:59875329255:web:2320abe577b6e1793d8e42",
    measurementId: "G-0KQWFHTMGF"
}).auth();


