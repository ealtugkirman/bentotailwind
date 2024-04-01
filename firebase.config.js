// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkNxquCOTKHqvHY-uFbD3DqetW4xi7Ex8",
    authDomain: "bentotailwind.firebaseapp.com",
    projectId: "bentotailwind",
    storageBucket: "bentotailwind.appspot.com",
    messagingSenderId: "47787306976",
    appId: "1:47787306976:web:370a8f38b1e3597c724585",
    measurementId: "G-6S6P7S4LC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);