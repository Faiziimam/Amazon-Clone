import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBfnbLfEEHXrOKasSmH6okHj1ADrWwUNWw",
    authDomain: "clone-e8cef.firebaseapp.com",
    projectId: "clone-e8cef",
    storageBucket: "clone-e8cef.appspot.com",
    messagingSenderId: "807593290407",
    appId: "1:807593290407:web:727b2a06abec28a3614982",
    measurementId: "G-14DV1ED3LP"
  }; 
  const firebaseapp=firebase.initializeApp(firebaseConfig); 

  const db=firebase.firestore();
  const auth=firebase.auth();
   
  export {db,auth};