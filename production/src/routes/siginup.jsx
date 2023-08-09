import React, {useContext, useEffect, useRef, useState} from "react";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
// import Dialog from '@mui/material/Dialog';
import { LoginContext } from '../LoginContext';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';


const API_URL = 'http://localhost:3000';

export const SignUpUser = (props) => {
    const userRef = useRef();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const { getUsername, handleLogin } = useContext(LoginContext);


    const emailRegex = /^\S+@\S+\.\S+$/;
    // These can be implemented as well for testing username and password:
    // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
      };

    async function handleSubmit(event) {
        event.preventDefault();

        console.log('User registering...');

        if (!username || !email || !password || !confirmPassword) {
            setSnackbarMessage('Please fill in all the fields');
            setSnackbarOpen(true);
            console.log('Please fill in all the fields');
            return;
        }

        if (!emailRegex.test(email)) {
            setSnackbarMessage('Please enter a valid email address');
            setSnackbarOpen(true);
            console.log('Please enter a valid email address or signup');
            return;
        }
        if (password !== confirmPassword) {
            setSnackbarMessage('Passwords do not match');
            setSnackbarOpen(true);
            console.log('Passwords do not match');
            return;
        }

        try {
            console.log('Attempting to POST data');
            const data = { username: username, email: email, password: password, confirmPassword: confirmPassword};
            await axios.post(`${API_URL}/api/signup`, data).then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                }
                else {
                    setSnackbarMessage("Signup Successful");
                    setSnackbarOpen(true);
                    localStorage.setItem('accessToken', response.data)
                    // getUsername(username);
                    handleLogin();
            
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');

                    // if (data.user) {
        //     console.log(data.user)
        //     console.log(data.user._id)
        //  localStorage.setItem('accessToken', data.user)
        //     getUsername()
        //     handleLogin()

        // } else {
    //         console.log(data)
    //         setSnackbarMessage("Something went wrong. Please try again.");
    //         setSnackbarOpen(true);
    //  }
                }
            });
    }
    
        catch(error) {
        console.error("Signup Error", error);
        setSnackbarMessage("An error occurred during signup");
        setSnackbarOpen(true);
        }
    }


      // CODE FROM THE ORIGINAL SIGNUP TEMPLATE BELOW. 
      // This seems to connect to LoginContext, but is currently not enabled
    // //sends login data
    // async function loginUser(event) {

    //     event.preventDefault() 
    
    //     const response = await axios.post(`${API_URL}/signup`, {
    //         username,
    //         email,
    //         password,
    //         confirmPassword
    //     });
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         //payload
    //         body: JSON.stringify({
    //            email,
    //            password,
    //         }),
    //     })

    //     const data = await response.json()

        
    //     //confirms user exists
        
    // }


    return (
        <div className='signupDiv'>
            <div id="accountDiv">
                <h1 style={{marginBottom: '10px'}}>Welcome!</h1>
                <h3 style={{marginBottom: '25px'}}>Let's get you an account: </h3>
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
                    ref={userRef}
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
                <br/>
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
                <br/>
                <Button
                    sx={{ 
                        background: 'brown',
                        m: '25px 0px 30px',
                        width: '130px'
                    }}
                    id="submit-btn"
                    type="submit"
                    variant="outlined"
                >
                    Sign me up!
                  
                </Button>
                </Box>
                
                <p style={{
                    lineHeight: 1.5, 
                    textAlign: 'center', 
                }}>
                    Psst... Already a member?<br/> 
                    Log in <Link to="/login">here!</Link>
                </p>    
            </div>
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
        </div>
    )};

export default SignUpUser;

