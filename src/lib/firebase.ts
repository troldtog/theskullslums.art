import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDadVG62uRgpZ8lae_dPTuMMDTGhnnjfac",
  authDomain: "genuine-synapse-378118.firebaseapp.com",
  projectId: "genuine-synapse-378118",
  storageBucket: "genuine-synapse-378118.appspot.com",
  messagingSenderId: "1039842758052",
  appId: "1:1039842758052:web:fc442a1d298a111a988531"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }