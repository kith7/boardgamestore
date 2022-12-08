import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYmunQ8dYb0lwcni5E0gLmNY0N9URe8H0",
  authDomain: "shopping-db-173eb.firebaseapp.com",
  projectId: "shopping-db-173eb",
  storageBucket: "shopping-db-173eb.appspot.com",
  messagingSenderId: "918321523045",
  appId: "1:918321523045:web:c515254cf59a9f0ad9598c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdDate,
      });
    } catch (err) {
      console.log("error while creating the user", err.message);
    }
  }
  return userDocRef;
};
