import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState(null);
      const provider = new GoogleAuthProvider();

      // New user create account
      const signup = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      // User login
      const signin = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };


      // Google signin
      const googleSignin = () => {
            setLoading(true);
            return signInWithPopup(auth, provider);
      };

      // Update profile
      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }

      // User logout
      const logout = () => {
            setLoading(true);
            return signOut(auth)
                  .then(() => {
                        setUser(null)
                  }).catch(err => {
                        console.log(err)
                  });
      };

      // Observer 
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
                  if (currentUser?.email) {
                        const user = { email: currentUser.email };
                        axios.post('https://lost-echo-server.vercel.app/jwt', user, { withCredentials: true })
                              .then(res => {
                                    setLoading(false);
                              })
                  }
                  else {
                        axios.post("https://lost-echo-server.vercel.app/logout", {}, { withCredentials: true })
                              .then(res => {
                                    setLoading(false);
                              })
                  }
            });

            return () => unSubscribe();
      }, []);


      const userInfo = {
            signin,
            googleSignin,
            signup,
            updateUserProfile,
            logout,
            loading,
            setLoading,
            user,
            setUser
      };

      return (
            <AuthContext.Provider value={userInfo}> {children} </AuthContext.Provider>
      )
};

export default AuthProvider;