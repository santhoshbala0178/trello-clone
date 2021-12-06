import {
  GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, sendPasswordResetEmail,
} from 'firebase/auth';
import {
  collection, query, where, getDocs, addDoc,
} from 'firebase/firestore';
import { auth, db } from './firebase';

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleAuthProvider);
    const { user } = response;
    const usersCollection = collection(db, 'users');
    const userQuery = query(usersCollection, where('uid', '==', user.uid));
    const users = await getDocs(userQuery);

    if (users.docs.length === 0) {
      await addDoc(usersCollection, {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (email : string, password : string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (name : string, email : string, password : string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response?.user;
    const usersCollection = collection(db, 'users');
    await addDoc(usersCollection, {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.log(err);
  }
};

export const passwordReset = async (email : string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
  }
};

export const logOut = () => {
  auth.signOut();
};
