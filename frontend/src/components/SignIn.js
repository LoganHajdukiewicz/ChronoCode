import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.data.success) {
        // Sign-in successful
        alert('Sign-in successful');
      } else {
        // Handle sign-in errors
        alert('Sign-in failed');
      }
    } catch (error) {
      // Handle network or server errors
      alert('An error occurred');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
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
        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
