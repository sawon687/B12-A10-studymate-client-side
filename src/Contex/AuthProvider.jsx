import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import AuthContex from './AuthContex';
import auth from '../FareBase/farebase.init';
import { useEffect, useState } from 'react';

const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const createUser = (Name, Email, PhotoURl, Password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, Name, Email, PhotoURl, Password)


    }
    const signInuser = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLoginandRegister = () => {
        setLoading(false)
        return signInWithPopup(auth, googleprovider)
    }
    const updateUsers = async (userDetals) => {
        setLoading(false)
        return await updateProfile(auth.currentUser, userDetals).then(() => {
            setUser({ ...auth.currentUser })
            setLoading(true)
        })
    }

    const signoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(true)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const userInfo = {
        createUser,
        googleLoginandRegister,
        user,
        signoutUser,
        signInuser,
        updateUsers,
        loading,

    }
    return (
        <div>
            <AuthContex value={userInfo} >{children}</AuthContex>
        </div>
    );
};

export default AuthProvider;