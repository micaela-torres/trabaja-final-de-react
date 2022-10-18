
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwkzQU_zDJlzWzOuOL4Twe0GImSbBF3Rs",
    authDomain: "primerapractica-22fb2.firebaseapp.com",
    projectId: "primerapractica-22fb2",
    storageBucket: "primerapractica-22fb2.appspot.com",
    messagingSenderId: "431025769773",
    appId: "1:431025769773:web:b40f695bd20b8c1de0d7a4",
    measurementId: "G-5SKB9V2VV4"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const createItem = async (obj) => {
    const colRef = collection(db, 'ordenes');
    const data = await addDoc(colRef, obj);
    return data.id;
};

// Initialize Firebase
initializeApp(firebaseConfig);

