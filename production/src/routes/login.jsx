import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LoginContext } from "../LoginContext";

const API_URL = '/data-vengers';
// const API_URL = 'http://localhost:8125'; // Your backend server URL

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { getUsername, handleLogin } = useContext(LoginContext);

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  async function loginUser(event) {
    event.preventDefault();

    if (!email || !password) {
      setSnackbarMessage('Please fill in all the fields');
      setSnackbarOpen(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setSnackbarMessage('Please enter a valid email address');
      setSnackbarOpen(true);
      return;
    }

    try {
      const data = { email: email, password: password };
      const response = await axios.post(`${API_URL}/api/login`, data);

      if (response.data.error) {
        setSnackbarMessage(response.data.error);
        setSnackbarOpen(true);
      } else {
        localStorage.setItem('accessToken', response.data.accessToken);
        setSnackbarMessage("Login Successful");
        setSnackbarOpen(true);

        setEmail('');
        setPassword('');
        getUsername();
        handleLogin();
      }
    } catch (error) {
      console.error("Login Error", error);
      setSnackbarMessage("An error occurred during login");
      setSnackbarOpen(true);
    }
  }

  return (
    <div className="loginDiv">
      <p>Hey friend, let's log you in!</p>
      <br/>
      <form onSubmit={loginUser}>
        <Box>
          <TextField
            required
            label="Email"
            value={email}
            autoComplete="off"
            placeholder="Ex. email@123.com"
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
            autoComplete="off"
            placeholder="Ex. PasSwoRd123"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <br/>
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
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
}

export default Login;
