import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-xharIH8BKD7r5MfEkDE2Vtwjq_pGkzY",
    authDomain: "sign-in-8d3da.firebaseapp.com",
    projectId: "sign-in-8d3da",
    storageBucket: "sign-in-8d3da.appspot.com",
    messagingSenderId: "455904667048",
    appId: "1:455904667048:web:ef565619476918a28ae99d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}