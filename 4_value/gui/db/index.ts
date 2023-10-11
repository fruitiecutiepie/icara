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

// Read
// const read = async () => {
//   const docRef = doc(db, 'users', 'abc');
//   const docSnap = await docRef.get();
//   console.log(docSnap.data());
// }

// Update
const update = async () => {
  const docRef = doc(db, 'user', 'abc');
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
  const docRef = doc(db, 'user', 'abc');
  await deleteDoc(docRef);
}

const createUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "user"), {
      firstName: "Audrey",
      lastName: "Santoso",
      emailAddress: 'audreysantoso15@gmail.com',

      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const createItem = async () => {
  try {
    const docRef = await addDoc(collection(db, "item"), {
      brandId: "12345",
      categoryId: "54321",
      name: "Neo Cushion Matte",
      type: "Foundation",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const createVariant = async () => {
  try {
    const docRef = await addDoc(collection(db, "variant"), {
      itemId: "12345",
      name: "Neo Cushion Matte",
      shade: "21",
      ingredients: [],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "user"));
  querySnapshot.forEach((doc) => {
    console.dir(`${doc.id} => ${doc.data()}`, { depth: null });
  });
}

getUsers();

export default db;