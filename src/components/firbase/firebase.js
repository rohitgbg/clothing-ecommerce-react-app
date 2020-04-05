import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyDDKgZ6NhU4l5RSK9G4OV6ypssZ6rv-yp0",
  authDomain: "clothing-ecommerce-adf0b.firebaseapp.com",
  databaseURL: "https://clothing-ecommerce-adf0b.firebaseio.com",
  projectId: "clothing-ecommerce-adf0b",
  storageBucket: "clothing-ecommerce-adf0b.appspot.com",
  messagingSenderId: "666705959173",
  appId: "1:666705959173:web:7b6babbf85d323c498bf6c",
  measurementId: "G-7E6GS0P2QJ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(userAuth);

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, emailVerified, photoURL } = userAuth;
    const createdDate = new Date();

    try {
      userRef.set({
        displayName,
        email,
        emailVerified,
        photoURL,
        createdDate,
        ...additionalData
      });
    } catch (error) {
      console.log("Error occured", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapShotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routerName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
