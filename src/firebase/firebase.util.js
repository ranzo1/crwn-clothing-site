import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_3h2__CfVal3MWA3Ljh0LIcDUNyuULMg",
  authDomain: "crown-db-3a060.firebaseapp.com",
  databaseURL: "https://crown-db-3a060.firebaseio.com",
  projectId: "crown-db-3a060",
  storageBucket: "crown-db-3a060.appspot.com",
  messagingSenderId: "908434139815",
  appId: "1:908434139815:web:6a28fdd975fb7cb35f0982",
  measurementId: "G-1DXE805K9R",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;  