// Import the functions you need from the SDKs you need
// Userful blog post: https://blog.logrocket.com/user-authentication-firebase-react-apps/

import { initializeApp } from 'firebase/app';
import {
  getAuth,
} from 'firebase/auth';
import {
  getFirestore,
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBmbE-ahjkq1KWPm2yhjFI5-bA_zhOXYI0',
  authDomain: 'trello-64d63.firebaseapp.com',
  projectId: 'trello-64d63',
  storageBucket: 'trello-64d63.appspot.com',
  messagingSenderId: '403329961095',
  appId: '1:403329961095:web:f362433298e55542bafc22',
  measurementId: 'G-X04PS6EYFF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
