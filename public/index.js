// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIKRau2RQ7JWCx4sYDynzm03DJuKhjBWY",
  authDomain: "chesmalto-411f5.firebaseapp.com",
  projectId: "chesmalto-411f5",
  storageBucket: "chesmalto-411f5.firebasestorage.app",
  messagingSenderId: "889533392889",
  appId: "1:889533392889:web:d55089859ce3e419a3bf28",
  measurementId: "G-98WNTWK5C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);