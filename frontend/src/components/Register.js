const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

const users = [];
const secretKey = 'yourSecretKey'; // Replace with a secure secret key

// Route to handle user registration
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Invalid data' });
  }

  if (users.some(user => user.email === email)) {
    return res.status(409).json({ success: false, message: 'Email already in use' });
  }

  const newUser = {
    email,
    password, // Store the plain text password (Note: Hashing is recommended)
  };

  users.push(newUser);

  // Generate a JWT token with the user's email as a payload
  const token = jwt.sign({ email }, secretKey);

  return res.status(201).json({ success: true, message: 'User registered successfully', token });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
