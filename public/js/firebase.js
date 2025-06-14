// Initialize Firebase

let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAUxHTfmIJxswR9iuwakPi8vFXZeGK6lvg",
    authDomain: "blogwebsite-54c12.firebaseapp.com",
    projectId: "blogwebsite-54c12",
    storageBucket: "blogwebsite-54c12.firebasestorage.app",
    messagingSenderId: "961549885922",
    appId: "1:961549885922:web:7f4f0eb5eafb6f285f99bb",
    measurementId: "G-NBGDNQSS54"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();