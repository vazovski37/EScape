import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwu5K1qpDK2yYhSDky5tDlwNmJDW1aN10",
  authDomain: "escape-fb357.firebaseapp.com",
  projectId: "escape-fb357",
  storageBucket: "escape-fb357.appspot.com",
  messagingSenderId: "397142579089",
  appId: "1:397142579089:web:49f9c2782030823d83ac30",
  measurementId: "G-78H55Y6TZR"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export const db = getFirestore(app)

export const signInWithFacebook = () =>{
  const facebookProvider = new FacebookAuthProvider();
  signInWithPopup( auth,facebookProvider).then((re)=>{
    console.log(re);
  })
  .catch((err)=>{
    console.log(err.message)
  })

}

export const signInWithGoogle = () => {
  const facebookProvider = new FacebookAuthProvider();
  signInWithPopup( auth,facebookProvider).then((re)=>{
    console.log(re);
  })
  .catch((err)=>{
    console.log(err.message)
  })
}