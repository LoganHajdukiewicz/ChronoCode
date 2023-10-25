import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/api/register', {
        email,
        password,
      });

      if (response.data.success) {
        // Registration successful
        alert('Registration successful');
      } else {
        // Handle registration errors
        alert('Registration failed');
      }
    } catch (error) {
      // Handle network or server errors
      alert('An error occurred');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
