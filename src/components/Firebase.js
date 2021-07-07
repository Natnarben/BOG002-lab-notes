import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCH3NGmDQVO5yilwqDhtDyYRfoEHM4HXzQ",
    authDomain: "taking-notes11.firebaseapp.com",
    projectId: "taking-notes11",
    storageBucket: "taking-notes11.appspot.com",
    messagingSenderId: "1092397349066",
    appId: "1:1092397349066:web:629b30054d1e245e169c33",
    measurementId: "G-EXN7GGC23N"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire
