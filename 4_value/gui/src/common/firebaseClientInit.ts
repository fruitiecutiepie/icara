import { initializeApp } from 'firebase/app';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import firebaseConfig from '../../../../2_admin/security/keys/firebase_config.json'

const firebaseApp = initializeApp(firebaseConfig);

export const db = initializeFirestore(firebaseApp, {localCache: persistentLocalCache()});
export const auth = getAuth(firebaseApp);