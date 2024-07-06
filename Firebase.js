
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyA9I875p4zLiWcUKfJpDfxEtfIaz_UXYqo",
  authDomain: "netflix-6fda9.firebaseapp.com",
  projectId: "netflix-6fda9",
  storageBucket: "netflix-6fda9.appspot.com",
  messagingSenderId: "434864562994",
  appId: "1:434864562994:web:80e03c392bf56b89282d2b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name,email,password)=>{
    try {
        const response= await createUserWithEmailAndPassword(auth,email,password);
        const user = response.user;
        await addDoc(collection(db,"user"),{
            uid : user.uid,
            name,authProvider : "local",
            email,
        })

    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}


const logIn = async (email,password)=>{
    try {

        await signInWithEmailAndPassword(auth,email,password)
        
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}
const logOut = async (email,password)=>{
    

        signOut(auth);
        
   
}

export {
    auth,
    db,
    logIn,
    signUp,
    logOut,

}