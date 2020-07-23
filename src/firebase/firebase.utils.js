import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDekMtvk2bVqY68hYrX-l6qJcq201jUKWI",
  authDomain: "shop-test1-c6779.firebaseapp.com",
  databaseURL: "https://shop-test1-c6779.firebaseio.com",
  projectId: "shop-test1-c6779",
  storageBucket: "shop-test1-c6779.appspot.com",
  messagingSenderId: "531416323909",
  appId: "1:531416323909:web:5c922eba5a0f9c2868502c",
  measurementId: "G-ZJ4GC8K1ZG",
};

firebase.initializeApp(firebaseConfig);

export const getCollectionFromStore = async (collectionName) => {
  try {
    const collectionRef = firestore.collection(collectionName);
    const snapShot = await collectionRef.get();
    return snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};

export const checkExistsDisplayName = async (displayName) => {
  const snapShot = await firestore.collection("users").get();
  return snapShot.docs.find((doc) => doc.data().displayName === displayName);
};

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
        address: [],
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
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const createProduct = async ({ name, price, type, image, discount }) => {
  try {
    const collectionRef = firestore.collection("products");
    const doc = collectionRef.doc();
    const imageURL = await uploadImage(doc.id, type, image);
    const batch = firestore.batch();
    await batch.set(doc, {
      name,
      price,
      type,
      imageURL,
      discount,
      createdAt: new Date().toISOString(),
    });
    return batch.commit();
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async (docId, type, image) => {
  try {
    const typeImage = image.name.slice(image.name.length - 4);
    const nameImg = docId + typeImage;
    await storage
      .ref(`images/collections/${type}/products/${docId}`)
      .child(nameImg)
      .put(image);
    return await storage
      .ref(`images/collections/${type}/products/${docId}`)
      .child(nameImg)
      .getDownloadURL();
  } catch (error) {
    throw error;
  }
};

export const getProductsFromStore = async () => {
  try {
    const collectionRef = firestore.collection("products");
    const snapShot = await collectionRef.get();
    return snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};

export const addAddressToUser = async (address, user) => {
  try {
    const usersRef = firestore.doc(`users/${user.id}`);
    const snapShot = await usersRef.get();
    const userAddress = snapShot.data().address;
    userAddress.push(address);
    await usersRef.update({ address: userAddress });
    return userAddress;
  } catch (error) {
    throw error;
  }
};

export const deleteAddressFromUser = async (indexAddress, user) => {
  try {
    const usersRef = firestore.doc(`users/${user.id}`);
    const snapShot = await usersRef.get();
    const userAddress = snapShot.data().address;
    if (userAddress.length < 1) return [];
    userAddress.splice(0, 1);
    await usersRef.update({ address: userAddress });
    return userAddress;
  } catch (error) {
    throw error;
  }
};

export const editAddressFromUser = async (index, address, user) => {
  try {
    const usersRef = firestore.doc(`users/${user.id}`);
    const snapShot = await usersRef.get();
    const userAddress = snapShot.data().address;
    userAddress[index] = address;
    await usersRef.update({ address: userAddress });
    return userAddress;
  } catch (error) {
    throw error;
  }
};

export const createOrderToStore = async (order) => {
  try {
    const collectionRef = firestore.collection("orders");
    const batch = firestore.batch();
    await batch.set(collectionRef.doc(), {
      ...order,
      status: { shipment: false, paid: false },
    });
    return batch.commit();
  } catch (error) {
    throw error;
  }
};

export const fetchOrdersFromStore = async (userId) => {
  try {
    const collectionRef = firestore.collection("orders");
    const snapShot = await collectionRef.get();
    const orders = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return orders;
  } catch (error) {
    throw error;
  }
};

export const fetchUsersFromStore = async () => {
  try {
    const collectionRef = firestore.collection("users");
    const snapShot = await collectionRef.get();
    const users = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return users;
  } catch (error) {
    throw error;
  }
};

export const deleteUserAuth = async (userId) => {
  try {
    const usersRef = firestore.doc(`users/${userId}`);
    const batch = firestore.batch();
    await batch.delete(usersRef);
    return batch.commit();
  } catch (error) {
    throw error;
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
