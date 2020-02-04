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

  console.log(userAuth);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
