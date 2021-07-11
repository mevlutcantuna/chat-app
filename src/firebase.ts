import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLGzrknG5s4zGuoXftDWDL8ay6vujdz-Q",
  authDomain: "mct-chat-app-9ecf3.firebaseapp.com",
  databaseURL: "https://mct-chat-app-9ecf3-default-rtdb.firebaseio.com",
  projectId: "mct-chat-app-9ecf3",
  storageBucket: "mct-chat-app-9ecf3.appspot.com",
  messagingSenderId: "344384415734",
  appId: "1:344384415734:web:2c499cd711c7fe543409d7",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
