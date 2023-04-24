import React, { useState } from 'react';
import Axios from 'axios'; // Import Axios for making HTTP requests
import './css/RegistrationForm.css'; // Import the CSS file for RegistrationForm

const RegistrationForm = () => {
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password input
  

    const handleRegistration = async (userData) => {
        try {
        const response = await axios.post('/api/register/', userData);
        // Handle successful registration
        console.log('Registration Success:', response.data);
        } catch (error) {
        // Handle registration error
        console.error('Registration failed:', error.response.data);
        }
    };

  return (
    <div className="card"> {/* Apply CSS class for the card container */}
      <h1>Registration Form</h1>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}