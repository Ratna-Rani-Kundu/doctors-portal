import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
initializeFirebase();
const useFirebase = () => {
    const [user,setUser]=useState({})
    const auth = getAuth();
    const registerUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    //observer
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
            
              const uid = user.uid;
               setUser(user)
            } else {
            setUser({})
            }
          }); 
          return ()=>unSubscribe
    },[])
    const logout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });  
    }
   return {
       user,
       registerUser,
       logout,

   }
};

export default useFirebase;