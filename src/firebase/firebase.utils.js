import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyATw2pzgW-QnX8hzw9vR_3BYD-WX6tLRuo",
  authDomain: "care-clothing-e660e.firebaseapp.com",
  databaseURL: "https://care-clothing-e660e.firebaseio.com",
  projectId: "care-clothing-e660e",
  storageBucket: "care-clothing-e660e.appspot.com",
  messagingSenderId: "192493669674",
  appId: "1:192493669674:web:1c303a71d72339d385e253",
  measurementId: "G-F9EMZ57NB0",
};

export const getCollectionFromStore = async (collectionName) => {
  const collectionRef = firestore.collection(collectionName);
  const snapShot = await collectionRef.get();
  return snapShot.docs.map(doc => ({ id:doc.id , ...doc.data()}))
}

export const checkExistsDisplayName = async (displayName) => {
  const snapShot = await firestore.collection("users").get();
  return snapShot.docs.find((doc) => doc.data().displayName === displayName);
};

firebase.initializeApp(firebaseConfig);

export const createUserProfile = async (userAuth, additionalData) => {

  const { email, uid } = userAuth;
  const usersRef = firestore.doc(`users/${uid}`);
  const snapShot = await usersRef.get();

  const now = new Date().toISOString();

  if (!snapShot.exists) {
    try {
      await usersRef.set({
        uid,
        email,
        createdAt: now,
        ...additionalData,
      });
    } catch (error) {
      throw error;
    }
  }
  return usersRef;
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
export const storage = firebase.storage();

export default firebase;
