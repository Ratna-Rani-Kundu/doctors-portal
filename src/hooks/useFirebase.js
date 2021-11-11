import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged,signInWithPopup,signInWithEmailAndPassword,signOut,updateProfile } from "firebase/auth";
initializeFirebase();
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const[authError,setAuthError] =useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser=(email,password,name,history)=>{
       setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            setAuthError('');
            const newUser={email,displayName:name};
            setUser(newUser)

            //send data to firebase
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message)
          
          })
          .finally(()=>setIsLoading(false));
    }
    const loginUser=(email,password,location,history)=>{
      setIsLoading(true)
     
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         const destination =location?.state?.from  || "/" ;
         history.replace(destination)
          setAuthError('')
        })
        .catch((error) => {
          setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }

    const signInwithGoogle=(location,history)=>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
       
       
   
        const user = result.user;
        setAuthError('')
        // ...
      }).catch((error) => {
        
        setAuthError(error.massage)

      }) 
      .finally(()=>setIsLoading(false));;
    }
    //observer
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
            
              // const uid = user.uid;
               setUser(user)
            } else {
            setUser({})
            }
            setIsLoading(false)
          }); 
          return ()=>unSubscribe
    },[])
    const logout=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false)); 
    }
   return {
       user,
       isLoading,
       registerUser,
       loginUser,
       signInwithGoogle,
       logout,
       authError,


   }
};

export default useFirebase;