// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.React_apiKey,
  // authDomain:import.meta.env.React_authDomain,
  // projectId:import.meta.env.React_projectId,
  // storageBucket:import.meta.env.React_storageBucket,
  // messagingSenderId:import.meta.env.React_messagingSenderId,
  // appId:import.meta.env.React_appId,

  
  apiKey: "AIzaSyBlVQIG6WCiz5yP0XrgufLm6nNFLDcVa7o",
  authDomain: "car-doctor-f2b63.firebaseapp.com",
  projectId: "car-doctor-f2b63",
  storageBucket: "car-doctor-f2b63.appspot.com",
  messagingSenderId: "926348856402",
  appId: "1:926348856402:web:c9f5554839f35ee6a5638b"
  
};

// console.log("API Key:", firebaseConfig.apiKey);
// console.log("Auth Domain:", firebaseConfig.authDomain);
// console.log("Project ID:", firebaseConfig.projectId);
// console.log("Storage Bucket:", firebaseConfig.storageBucket);
// console.log("Messaging Sender ID:", firebaseConfig.messagingSenderId);
// console.log("App ID:", firebaseConfig.appId);
console.log("Importing firebaseConfig");


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

