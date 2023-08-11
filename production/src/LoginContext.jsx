import React, { useEffect, useState, createContext } from "react";
import Snackbar from '@mui/material/Snackbar';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const API_URL = 'http://localhost:3000'; // Your backend server URL

const LoginContext = createContext("");

const LoginContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    
    if (token) {
      setIsLoggedIn(true);
      getUsername();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  function handleLogin() {
    setIsLoggedIn(true);
    setSnackbarMessage("You are now logged in");
    setSnackbarOpen(true);
    navigate("/game_map");
  }

  function handleLogout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    setSnackbarMessage("You have been logged out");
    setSnackbarOpen(true);
  }

  function handleSnackbarClose() {
    setSnackbarOpen(false);
  }

  async function getUsername() {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const response = await axios.get(`${API_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          const username = data.username;
          setUsername(username);
      
        } else {
          localStorage.removeItem('accessToken');
        }
      } catch (error) {
        console.error('Error getting username', error);
      }
    }
  }

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        handleLogin,
        handleLogout,
        username,
        setUsername,
        getUsername,
      }}
    >
      {props.children}

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, LoginContext };
