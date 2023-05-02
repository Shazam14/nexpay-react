import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config'

import React, { useState } from 'react';
//import Axios from 'axios'; // Import Axios for making HTTP requests
import '../test_css/Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    try { 
      const response = await axios.post(`${API_URL}/api/login/`, userData);
      // Handle successful login
      console.log(response.data);

      // Redirect to a different page on successful login
      navigate('/animeproduct'); // 
    } catch (error) {
      // Handle login error
      console.error(error.response.data);
    }
  };

  return (
    <div className="card"> {/* Apply CSS class for the card container */}
      <h1>Login Form</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;






  