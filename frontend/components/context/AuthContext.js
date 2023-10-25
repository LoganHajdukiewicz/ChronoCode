import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
require('dotenv').config();

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (code) {
      // Handle the code, exchange it for an access token, and set it in state
      // Implement this logic based on your application's requirements
      setAccessToken('YOUR_ACCESS_TOKEN'); // Replace with the actual access token
      history.push('/');
    }
  }, [location.search, history]);

  const loginWithGitHub = () => {
    // Redirect the user to GitHub for authorization
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/callback&scope=repo`;
  };

  const logout = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, loginWithGitHub, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
