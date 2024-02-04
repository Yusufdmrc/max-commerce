// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4A0Cq_tkcsVDzTp56ucrl24e7tN6wT2c",
  authDomain: "e-commerce-vid.firebaseapp.com",
  projectId: "e-commerce-vid",
  storageBucket: "e-commerce-vid.appspot.com",
  messagingSenderId: "185514533092",
  appId: "1:185514533092:web:cbe67f0f1471491dc88cf1",
  measurementId: "G-8FXC9EHD0N",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
