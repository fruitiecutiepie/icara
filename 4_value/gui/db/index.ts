import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../../2_admin/security/keys/firebase_config.json'

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

console.log('Hello from db/index.ts')