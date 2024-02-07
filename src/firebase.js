import firebase from "firebase/compat/app";
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyDAOzB8rJ86_H0BG6tx1TmFtWzuDeawUmA",
    authDomain: "react-ldrp.firebaseapp.com",
    projectId: "react-ldrp",
    storageBucket: "react-ldrp.appspot.com",
    messagingSenderId: "611639800419",
    appId: "1:611639800419:web:ca334967eb942f1b8ebe56"
  };

  const fireDb = firebase.initializeApp(firebaseConfig)
  export default fireDb.database().ref();