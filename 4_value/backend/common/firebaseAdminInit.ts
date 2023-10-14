import admin, { ServiceAccount } from 'firebase-admin';

// Load service account key
import serviceAccount from '../../../2_admin/security/keys/firebase_admin_config.json';

// Initialize the app with a service account
admin.initializeApp({
  credential: admin.credential.cert(<ServiceAccount>serviceAccount),
});

// Accessing different Firebase services:
export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();
