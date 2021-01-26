import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const CONFIG =  {
    apiKey: "AIzaSyBWS0phzp3xFyQdyMWbWY1Z6P79xdxu968",
    authDomain: "clothesdatabase-3726e.firebaseapp.com",
    projectId: "clothesdatabase-3726e",
    storageBucket: "clothesdatabase-3726e.appspot.com",
    messagingSenderId: "641132053939",
    appId: "1:641132053939:web:f97d91cd8aa3dbcd09f7c6",
    measurementId: "G-VZ6972GD9C"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    }
}

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;