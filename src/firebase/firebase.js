import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2H2_KIAe1vtmpD9zzQbVGUmGEOPELHes",
    authDomain: "crwn-clothing-e15ab.firebaseapp.com",
    projectId: "crwn-clothing-e15ab",
    storageBucket: "crwn-clothing-e15ab.appspot.com",
    messagingSenderId: "841561266567",
    appId: "1:841561266567:web:768a4a5279b999fa7c5b22",
    measurementId: "G-ELKEGL3JMD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then()
        .catch()
}