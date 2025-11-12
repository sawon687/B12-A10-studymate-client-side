import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import AuthContex from './AuthContex';
import auth from '../FareBase/farebase.init';
import { useEffect, useState } from 'react';

const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const createUser=(Name,Email,PhotoURl,Password)=>{
        return createUserWithEmailAndPassword(auth,Name,Email,PhotoURl,Password)
    }
    const signInuser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLoginandRegister=()=>{
        return signInWithPopup(auth,googleprovider)
    }
    const updateUsers=async(userDetals)=>{
        return await updateProfile(auth.currentUser,userDetals).then(()=>{
            setUser({...auth.currentUser})
        })
    }
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
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
        signInuser,
        updateUsers,
        resetPassword,
    }
    return (
        <div>
            <AuthContex value={userInfo} >{children}</AuthContex>
        </div>
    );
};

export default AuthProvider;