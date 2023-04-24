import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom for navigation

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook for navigate function to navigate to different pages

  const handleRegister = async () => {
    try {
      const response = await Axios.post('api/register/', {
        email: email,
        password: password
      });
      console.log('Registration success:', response.data);

    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await Axios.post('api/login', {
        email: email,
        password: password
      });
      console.log('Login success:', response.data);
      setLoggedIn(true);
      navigate('/dashboard'); // Use navigate function to redirect to dashboard page

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    navigate('/login'); // Use navigate function to redirect to login page
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome to Dashboard</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login/Register</h1>
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
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;




// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';

// const Dashboard = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  
//     // const navigate = useNavigate(); // Get the navigate function from react-router-dom

//     const handleLogin = () => {
//         setIsLoggedIn(true);
//       };

//     const handleLogout = () => {
//         // Handle logout logic here
//         // Redirect to login page on logout
//         setIsLoggedIn(false);
//     };


//     return (
//         <Router>
//           <div>
//             <Switch>
//               <Route exact path="/login">
//                 {/* Render login form */}
//                 <LoginForm onLogin={handleLogin} />
//               </Route>
//               <Route exact path="/register">
//                 {/* Render registration form */}
//                 <RegistrationForm />
//               </Route>
//               <Route exact path="/dashboard">
//                 {/* Render dashboard if user is logged in, else redirect to login */}
//                 {isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Redirect to="/login" />}
//               </Route>
//               <Redirect to="/login" />
//             </Switch>
//           </div>
//         </Router>
//   )
