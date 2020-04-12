import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_xkFzhVpVr9QC2k33P5CccxFG19xfb18",
    authDomain: "socia1eyes.firebaseapp.com",
    databaseURL: "https://socia1eyes.firebaseio.com",
    projectId: "socia1eyes",
    storageBucket: "gs://socia1eyes.appspot.com",
    messagingSenderId: "973196236998",
    appId: "1:973196236998:web:9d85d953310f3cfb631fc7",
    measurementId: "G-BC9B2WSVJG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;