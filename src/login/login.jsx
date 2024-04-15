// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  //add this too github
  alert()
  const handleLogin = (e) => {
    e.preventDefault(); 
    if (username === 'demo' && password === 'password') {
      onLogin();
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
    <div className="login-card">
      <h2>Login</h2>
      <div className="error-message">{error}</div>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  );
};

export default Login;
