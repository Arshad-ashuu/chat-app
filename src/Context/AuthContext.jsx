import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";



//context
const AuthContext = createContext();
//provider
export const AuthProvider= ({children})=>{
    const [currentUser, setcurrentUser] = useState(null);
//stop from et=nter login page on refresh
const [loading, setloading] = useState(true)


//signin
 const signInWithGoogle=()=>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider )
 }
//logout
const logout =()=>signOut(auth)
    const value={
        currentUser,
        setcurrentUser,
        signInWithGoogle,
        logout
    }
//set current user
useEffect(() => {
  const unsubscribe= onAuthStateChanged(auth,(user)=>{
    setcurrentUser(user)
    setloading(false)
  })
  return unsubscribe
}, [])


    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext);
}