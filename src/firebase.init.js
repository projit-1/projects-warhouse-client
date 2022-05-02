// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRd5xNScQqMud-J7WLd20Fb4XBCo6cDX4",
    authDomain: "ns-electronics-khulna.firebaseapp.com",
    projectId: "ns-electronics-khulna",
    storageBucket: "ns-electronics-khulna.appspot.com",
    messagingSenderId: "125921842882",
    appId: "1:125921842882:web:ed1148ace79175e32c8d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
