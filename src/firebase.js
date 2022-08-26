import firebase from "./firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM6EaTsHu3cRIk6ecM8amg8kqskOwxJZE",
    authDomain: "tiktok-clone-f14cf.firebaseapp.com",
    projectId: "tiktok-clone-f14cf",
    storageBucket: "tiktok-clone-f14cf.appspot.com",
    messagingSenderId: "572551250336",
    appId: "1:572551250336:web:8aa2ba1054963fe73924c5",
    measurementId: "G-KHY7RRK2BK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
