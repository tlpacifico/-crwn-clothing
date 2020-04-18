import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQ4hGTJYJ5DpxHNsan2-5gurDNP3mdyPA",
    authDomain: "crwn-db-6cd80.firebaseapp.com",
    databaseURL: "https://crwn-db-6cd80.firebaseio.com",
    projectId: "crwn-db-6cd80",
    storageBucket: "crwn-db-6cd80.appspot.com",
    messagingSenderId: "637843240022",
    appId: "1:637843240022:web:d6830f619bb235c4c4b7f7",
    measurementId: "G-X4FYJF8B67"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default signInWithGoogle;