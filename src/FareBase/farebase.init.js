// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxPLemSLZyJYSE5DHfs5AtrKPSCyW2pVA",
  authDomain: "studymate-project-2a4b8.firebaseapp.com",
  projectId: "studymate-project-2a4b8",
  storageBucket: "studymate-project-2a4b8.firebasestorage.app",
  messagingSenderId: "536528932145",
  appId: "1:536528932145:web:cb69f6b85ea6d8b93ef410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;