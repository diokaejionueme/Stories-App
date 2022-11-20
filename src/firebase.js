// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBcfM_AamoUi3v2Z-qrVNsXKvfp7rtCLJI",
  authDomain: "stories-firebase-app-e7c1e.firebaseapp.com",
  projectId: "stories-firebase-app-e7c1e",
  storageBucket: "stories-firebase-app-e7c1e.appspot.com",
  messagingSenderId: "321161518731",
  appId: "1:321161518731:web:6c0ca5813a3efb07a87e8e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {db}