import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2GB8Y_YFi4UBjNssOPSDFgz_tXAsICYs",
  authDomain: "slack-clone-a763c.firebaseapp.com",
  projectId: "slack-clone-a763c",
  storageBucket: "slack-clone-a763c.appspot.com",
  messagingSenderId: "327174195493",
  appId: "1:327174195493:web:d2db26310756ca98a572cc",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
