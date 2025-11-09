import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import AuthContex from './AuthContex';
import auth from '../FareBase/farebase.init';
import { useEffect, useState } from 'react';

const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLoginandRegister=()=>{
        return signInWithPopup(auth,googleprovider)
    }
 const signoutUser=()=>{
    return signOut(auth)
 }
 
    useEffect(()=> {
         const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
         })
         return()=>{
            unsubscribe()
         }
    },[])
     const  userInfo={
        createUser,
        googleLoginandRegister,
        user,
        signoutUser,
    }
    return (
        <div>
            <AuthContex value={userInfo} >{children}</AuthContex>
        </div>
    );
};

export default AuthProvider;