import firebase from "firebase"
const firebaseConfig = (
    {
    apiKey: "AIzaSyCuVAUTMZhp2czThjzuP1wDzkWKXZTVyME",
    authDomain: "todos-app-46728.firebaseapp.com",
    projectId: "todos-app-46728",
    storageBucket: "todos-app-46728.appspot.com",
    messagingSenderId: "390607666968",
    appId: "1:390607666968:web:e4a2240b7d94f1e683e86d",
    measurementId: "G-PCGJTKR5CD"
    }
)
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export {db};