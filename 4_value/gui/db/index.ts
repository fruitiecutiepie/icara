import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  connectFirestoreEmulator,
  doc,
  collection,
  setDoc,
  deleteDoc,
  addDoc,
  getDocs,
} from 'firebase/firestore';
import firebaseConfig from '../../../2_admin/security/keys/firebase_config.json'

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
connectFirestoreEmulator(db, 'localhost', 8080);

console.log('Hello from db/index.ts')

// CRUD operations

// Create
const create = async () => {
  const docRef = doc(db, 'users', 'abc');
  const payload = {
    name: 'Bob',
    age: 23,
    address: {
      street: '123 Street',
      city: 'New York',
    },
  };
  await setDoc(docRef, payload);
};

// Read
// const read = async () => {
//   const docRef = doc(db, 'users', 'abc');
//   const docSnap = await docRef.get();
//   console.log(docSnap.data());
// }

// Update
const update = async () => {
  const docRef = doc(db, 'users', 'abc');
  const payload = {
    name: 'Bob',
    age: 23,
    address: {
      street: '123 Street',
      city: 'New York',
    },
  };
  await setDoc(docRef, payload);
}

// Delete
const deleteDocument = async () => {
  const docRef = doc(db, 'users', 'abc');
  await deleteDoc(docRef);
}

const addUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// addUser();

const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.dir(`${doc.id} => ${doc.data()}`, { depth: null });
  });
}

getUsers();

export default db;