// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASpN4DBTa8-NMXi-ASn6dUkES5eikUv0I",
    authDomain: "kiddo-toy-warehouse.firebaseapp.com",
    projectId: "kiddo-toy-warehouse",
    storageBucket: "kiddo-toy-warehouse.appspot.com",
    messagingSenderId: "30565087527",
    appId: "1:30565087527:web:63f2839355ed7d1d9bd102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;