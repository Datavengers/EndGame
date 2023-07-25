import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import axios from 'axios';
import {Link} from 'react-router-dom';


const apiUrl = 'http://localhost:3000'; // Your backend server URL

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  axios.get("http://localhost:3000/login").then((response) => {
    console.log(response.data);
});

  async function loginUser(event) {
    event.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        setSnackbarMessage("Login successful");
        setSnackbarOpen(true);

        // Redirect to a different page after successful login if needed
        // For example, using React Router:
        // history.push('/dashboard');
      } else {
        setSnackbarMessage("Invalid credentials. Please try again.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setSnackbarMessage("An error occurred during login");
      setSnackbarOpen(true);
    }
  }

  return (
    <div className="loginDiv">
      <p>Hey friend, let's log you in!</p>
      <form onSubmit={loginUser}>
        <Box>
          <TextField
            required
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <br/>
        <Box>
          <TextField
            required
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <br/>
        <Box>
          <Button type="submit" variant="contained" color="primary">
            Sign In
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
      <p>Psst... Don't have a login yet? <br/>
        Sign up <Link to="/signup">here!</Link></p>
    </div>
  );
};

export default Login;