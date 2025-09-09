import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        
        const role = firebaseUser.email === "mdrakibulhasan12346@gmail.com" ? "admin" : "user";
        setUser({ ...firebaseUser, role });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
