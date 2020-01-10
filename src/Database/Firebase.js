import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB98imsL0j7nI7pcV2fFZq4jr5212vEL94",
  authDomain: "meeting-app-4779c.firebaseapp.com",
  databaseURL: "https://meeting-app-4779c.firebaseio.com",
  projectId: "meeting-app-4779c",
  storageBucket: "meeting-app-4779c.appspot.com",
  messagingSenderId: "43942488658",
  appId: "1:43942488658:web:7fdbc2cf9ec626437a4d8b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
