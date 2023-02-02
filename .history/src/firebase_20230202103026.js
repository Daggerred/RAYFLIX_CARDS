import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBtmoLkcpQm1P_97xi0Ya200sujJcntszM",
    authDomain: "netflix-build-clone-48a82.firebaseapp.com",
    projectId: "netflix-build-clone-48a82",
    storageBucket: "netflix-build-clone-48a82.appspot.com",
    messagingSenderId: "334406800063",
    appId: "1:334406800063:web:3e8181b3b269ff711e2c0a"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;