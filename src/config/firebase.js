// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDBKhDXJ9rBI1qxn1OfAjW3Qaa1D20-2as',
  authDomain: 'dbaspavan8899-b4909.firebaseapp.com',
  projectId: 'dbaspavan8899-b4909',
  storageBucket: 'dbaspavan8899-b4909.appspot.com',
  messagingSenderId: '153387271919',
  appId: '1:153387271919:web:6737249e895958b795fd1a',
  measurementId: 'G-Q09R1GNCJ9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
