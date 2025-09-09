import React from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/"); // login success → home
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Login with Google</h1>
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Sign in with Google
      </button>
    </div>
  )
}

export default Login;
