import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore';

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

// google authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then()
        .catch()
}

// firestore
const firestore = getFirestore();
const usersCollection = collection(firestore, 'users');

export const createUser = async (user, additionalData) => {
    if (!user) return;

    // check if user already exist
    let data = null;
    const querySnapshot = await getDocs(query(collection(firestore, '/users'), where('email', '==', `${user.email}`)));
    querySnapshot.forEach((doc) => {
        data = doc.data();
    })

    // if it doesn't, create new user
    if (!data) {
        addDoc(usersCollection, {
            name: user.displayName,
            email: user.email
        });
        return true;
    }
    else {
        return false;
    }
} 