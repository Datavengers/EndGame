import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {LoginContext, LoginContextProvider} from "../LoginContext";

const API_URL = 'http://localhost:3000'; // Your backend server URL

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
      console.log('Please fill in all the fields');
      return;
    }

    if (!emailRegex.test(email)) {
      setSnackbarMessage('Please enter a valid email address');
      setSnackbarOpen(true);
      console.log('Please enter a valid email address');
      return;
  }

  try {
    const data = { email: email, password: password};
    console.log('Attempting to Login data');
    await axios.post(`${API_URL}/api/login`, data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        setEmail('');
        setPassword('');
      }
      else {
        localStorage.setItem('accessToken', response.data);
        console.log(response.data)
        alert(response.data)
        setSnackbarMessage("Login Successful");
        console.log("Login Successful");
        setSnackbarOpen(true);
        
    
    
        setEmail('');
        setPassword('');
        getUsername();
        handleLogin();
      }
    }) 
}
    catch(error) {
      console.error("Login Error", error);
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
          <Button type="submit" 
          variant="contained" 
          color="primary"
          onClick={loginUser}>
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