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
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('erros creating user', error.message);
      }
    }

    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionsKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionsKey)

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

  return await batch.commit();
  }

  export const convertCollectionsSnapshotMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

   return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default signInWithGoogle;