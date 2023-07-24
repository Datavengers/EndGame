import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import axios from 'axios';

const apiUrl = 'http://localhost:3000'; // Your backend server URL

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  async function registerUser(event) {
    event.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setSnackbarMessage("Please fill in all the fields");
      setSnackbarOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      setSnackbarMessage("Passwords do not match");
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        setSnackbarMessage("Your account has been created!");
        setSnackbarOpen(true);

        // Redirect to the login page after successful signup
        // For example, using React Router:
        // history.push('/login');
      } else {
        setSnackbarMessage("Something went wrong. Please try again.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Signup error:', error);
      setSnackbarMessage("Something went wrong. Please try again.");
      setSnackbarOpen(true);
    }
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <Box>
          <TextField
            required
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            required
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            required
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            required
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </Box>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default Signup;
