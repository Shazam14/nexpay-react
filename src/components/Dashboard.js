import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  
    const navigate = useNavigate(); // Get the navigate function from react-router-dom

    const handleLogin = () => {
        setIsLoggedIn(true);
      };

    const handleLogout = () => {
        // Handle logout logic here
        // Redirect to login page on logout
        setIsLoggedIn(false);
        //navigate('/login'); // removing this at the moment

    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/login">
                {/* Render login form */}
                <LoginForm onLogin={handleLogin} />
              </Route>
              <Route exact path="/register">
                {/* Render registration form */}
                <RegistrationForm />
              </Route>
              <Route exact path="/dashboard">
                {/* Render dashboard if user is logged in, else redirect to login */}
                {isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Redirect to="/login" />}
              </Route>
              <Redirect to="/login" />
            </Switch>
          </div>
        </Router>
      );
    };

export default Dashboard;
