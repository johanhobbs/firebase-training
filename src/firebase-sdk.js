// TODO Import the functions from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"
// TODO - Add SDKs for Firebase products

// NOTE - Your web app's firebase config

const firebaseConfig = {
    apiKey: "AIzaSyDPZZexwXR0i0-sYgE7cYLb_bjAEMg1TOs",
    authDomain: "fir-training-ac8e6.firebaseapp.com",
    databaseURL: "https://fir-training-ac8e6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-training-ac8e6",
    storageBucket: "fir-training-ac8e6.appspot.com",
    messagingSenderId: "1014609337991",
    appId: "1:1014609337991:web:a566974bbdabc44be7e222",
    // measurementId: ""
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)