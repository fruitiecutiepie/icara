import type { Component } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

const App: Component = () => {
  return (
    <div class="m-5">
      <nav class="flex space-x-20 text-xl my-10 mt-20 justify-center">
        <A href="/">Home</A>
        <A href="/about">About</A>
        <A href="/profile">Profile</A>
      </nav>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Routes>
    </div>
  );
};

export default App;

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, connectFirestoreEmulator } from 'firebase/firestore';
import firebaseConfig from '../../../2_admin/security/keys/firebase_config.json'

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

connectFirestoreEmulator(db, 'localhost', 8080);

const docRef = doc(db, "users", "alovelace");

console.log('Hello from db/index.ts')