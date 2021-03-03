// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2Fz93rrAViQR_TfFg3q9_c0kQFcyIK98",
    authDomain: "crown-king-40751.firebaseapp.com",
    projectId: "crown-king-40751",
    storageBucket: "crown-king-40751.appspot.com",
    messagingSenderId: "952754065944",
    appId: "1:952754065944:web:80a0a6759b396010a4a96d",
    measurementId: "G-42QCYCNS6T"
};

firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ 'prompt': 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

