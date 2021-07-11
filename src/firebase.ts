import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-j3lUuJT3zpPeeVZjWrne-L0K267ZgsA",
  authDomain: "chat-app-mct.firebaseapp.com",
  projectId: "chat-app-mct",
  storageBucket: "chat-app-mct.appspot.com",
  messagingSenderId: "450861688719",
  appId: "1:450861688719:web:fe6e7e5013cd125ec18dfa",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
