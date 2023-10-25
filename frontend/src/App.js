import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null);

  // Use this effect to check if the user is signed in when the app loads.
  useEffect(() => {
    // Check if the user is authenticated (e.g., via a token stored in localStorage or cookies).
    // If authenticated, update the "user" state.
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage.
    if (token) {
      // Call your authentication API to validate the token and get user data.
      // You should replace this with your actual authentication logic.
      // Example:
      // authenticateUserWithToken(token).then(userData => {
      //   setUser(userData);
      // });
    }
  }, []); // Empty dependency array means this effect runs only once on component mount.

  const handleSignOut = () => {
    // Add sign-out logic here (e.g., clearing tokens from localStorage).
    localStorage.removeItem('token'); // Clear the token from localStorage.
    setUser(null); // Clear the user state.
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/api/register" element={user ? <Navigate to="/" /> : <Register/>}/>
          <Route
            path="/"
            element={
              user ? (
                <div>
                  <h2>Welcome, {user.username}!</h2>
                  {/* Display user-specific content here */}
                </div>
              ) : (
                <h2>Home Page</h2>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
