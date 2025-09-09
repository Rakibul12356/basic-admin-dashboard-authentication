import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate("/login"); // registration success → redirect to login
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Register</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="input input-bordered w-full"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="input input-bordered w-full"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        className="input input-bordered w-full"
      />

      <button
        onClick={handleRegister}
        className="btn btn-primary w-full"
      >
        Register
      </button>
    </div>
  )
}

export default Register;
