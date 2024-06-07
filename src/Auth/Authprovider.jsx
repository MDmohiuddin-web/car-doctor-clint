import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const signup = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sign = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const providergoogle = new GoogleAuthProvider();
  const googlesign = () => {
    signInWithPopup(auth, providergoogle)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        setLoader(false);
        
        toast.success("signInWithGoogle success full");
      })
      .catch((error) => {
        console.log(error);
        toast.error("signInWithGoogle failed");
      });
  };

  const sinout = () => {
    setLoader(true);
    console.log("sign out");
    toast.warn("sign out success full");

    return signOut(auth);
  };
  const updateUserProfile = (name, image) => {
    setLoader(true);
    // toast.success('updateUserProfile success full')
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setLoader(false);
      } else {
        setUser(null);
        setLoader(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const Authinfo = {
    user,
    setUser,
    loader,
    setLoader,
    signup,
    sign,
    sinout,
    updateUserProfile,
    googlesign,
  };
  return (
    <div>
      <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
