import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile 
} from "firebase/auth";
import AuthContex from "./AuthContex";
import auth from "../FareBase/farebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null initially
  const [loading, setLoading] = useState(true);

  // ------------------ Create User ------------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ------------------ Sign In User ------------------
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ------------------ Google Login ------------------
  const googleLoginAndRegister = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ------------------ Update Profile ------------------
  const updateUsers = (userDetails) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userDetails).then(() => {
      setUser({ ...auth.currentUser }); // update local state
      setLoading(false);
    });
  };

  // ------------------ Sign Out ------------------
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ------------------ Auth State Listener ------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleLoginAndRegister,
    updateUsers,
    signOutUser,
  };

  return (
    <AuthContex.Provider value={userInfo}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
