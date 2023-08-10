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
    console.log("login context user effect")

    const token = localStorage.getItem('accessToken');
    console.log(token);
    if (token) {
      console.log(token);
      console.log("The token should be true");
      setIsLoggedIn(true);
      getUsername();
    } else {
      setIsLoggedIn(false);
      console.log("You are not logged in");
     
    }
  }, []);


  function handleLogin() {
    console.log('handle login launched')
    setIsLoggedIn(true);
    setSnackbarMessage("You are now logged in");
    console.log('You are now logged in')
    setSnackbarOpen(true);
    navigate("/game_map");
  }

  function handleLogout() {
    localStorage.removeItem('accessToken')
    setIsLoggedIn(false)
    setSnackbarMessage("You have been logged out");
    setSnackbarOpen(true);
    
  }

  function handleSnackbarClose() {
    setSnackbarOpen(false);
  }


  //should probably create a function just for handling token


  //need to get token, send it, make the get request to username, receive back the username, set it
  async function getUsername() {
    // tries to grab token
    const token = localStorage.getItem('accessToken');
  
    // if token, makes get request
    if (token) {
      const res = await axios.get(`${API_URL}/api/login`, {
        method: 'GET',
        headers: {
          // passes the access token grabbing from local storage
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(res);
      if(res.status == 200) {
        const data = res.data[0];

        // success, sets username state
        const username = data.username;
        setUsername(username);
        console.log(`Hello ${username}`);
      } else {
        // removes token if request is unsuccessful
        // localStorage.removeItem('accessToken');
      }
    }
  


  }  
  console.log("loginContext rendered")
  console.log(isLoggedIn)

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