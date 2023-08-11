import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { LoginContext } from "../LoginContext";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

const API_URL = "http://localhost:3000";

const SignUpUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { getUsername, handleLogin } = useContext(LoginContext);

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setSnackbarMessage("Please fill in all the fields");
      setSnackbarOpen(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setSnackbarMessage("Please enter a valid email address");
      setSnackbarOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      setSnackbarMessage("Passwords do not match");
      setSnackbarOpen(true);
      return;
    }

    try {
      const data = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      const response = await axios.post(`${API_URL}/api/signup`, data);

      if (response.data.error) {
        setSnackbarMessage(response.data.error);
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage("Signup Successful");
        setSnackbarOpen(true);
        localStorage.setItem("accessToken", response.data.accessToken);
        getUsername();
        handleLogin();

        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error("Signup Error", error);
      setSnackbarMessage("An error occurred during signup");
      setSnackbarOpen(true);
    }
  }

  return (
    <div className="signupDiv">
      <div id="accountDiv">
        <h1 style={{ marginBottom: "10px" }}>Welcome!</h1>
        <h3 style={{ marginBottom: "25px" }}>Let's get you an account: </h3>
        <Box
          className="account-fields"
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1 },
            '& .Mui-focused': { color: '#f5f5f5' },
            '& .Mui-active': { color: '#f5f5f5' },
            '& .Mui-filled': { color: '#f5f5f5' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            label="Username"
            className="account-textfield"
            type="text"
            value={username}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            label="Email"
            className="account-textfield"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            required
            label="Password"
            className="account-textfield"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            label="Confirm Password"
            className="account-textfield"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <Button
            sx={{
              background: "brown",
              m: "25px 0px 30px",
              width: "130px",
            }}
            id="submit-btn"
            type="submit"
            variant="outlined"
          >
            Sign me up!
          </Button>
        </Box>

        <p
          style={{
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          Psst... Already a member?<br />
          Log in <Link to="/login">here!</Link>
        </p>
      </div>
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

export default SignUpUser;
