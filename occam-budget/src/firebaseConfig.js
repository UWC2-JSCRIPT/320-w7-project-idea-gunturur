import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzdTzMGlLeK86neWHyKOHbmpgXLDta5ts",
    authDomain: "occambudget.firebaseapp.com",
    projectId: "occambudget",
    storageBucket: "occambudget.appspot.com",
    messagingSenderId: "427120994366",
    appId: "1:427120994366:web:42a18affd98fd4f9d7096f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
