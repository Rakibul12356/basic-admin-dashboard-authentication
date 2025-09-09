import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from './firebase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Email & Password Login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // login success → home
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  // Google Login
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
    <div className="p-6 max-w-md mx-auto flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="input input-bordered w-full"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="input input-bordered w-full"
      />

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="btn btn-primary w-full"
      >
        Login
      </button>

      {/* Divider */}
      <div className="divider">OR</div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full"
      >
        Sign in with Google
      </button>

      {/* Register Link */}
      <p className="text-center mt-2">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-500 font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
