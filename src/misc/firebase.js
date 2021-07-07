import firebase from "firebase/app";
import 'firebase/auth' ;
import 'firebase/database';
import 'firebase/storage';


const config = {
    apiKey: "AIzaSyCBQzQarBlhN7QqrkBKswYmrRY5dT4nHkI",
    authDomain: "chat-web-app-f6a77.firebaseapp.com",
    databaseURL: "https://chat-web-app-f6a77-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-f6a77",
    storageBucket: "chat-web-app-f6a77.appspot.com",
    messagingSenderId: "544958186037",
    appId: "1:544958186037:web:5c2fac1823e0a3342e277c"
  };

  const app = firebase.initializeApp(config);
  export const auth =app.auth();
  export const database =app.database();
  export const storage = app.storage();
  