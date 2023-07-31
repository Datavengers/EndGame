import React, {useEffect, useRef, useState} from "react";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
// import Dialog from '@mui/material/Dialog';
// import { LoginContext } from '../hooks/LoginContext';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

// const USER_REGEX = `/^[a-zA-Z][a-ZA-Z0-9-_]{3,23}$/`;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8, 24}$/;

export const SignUpUser = (props) => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmMatch, setConfirmMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // const { handleLogin, getUsername } = React.useContext(LoginContext);
    const [ message, setMessage ] = useState('');

    // const emailRegex = /^\S+@\S+\.\S+$/;

    useEffect(() => {
        userRef.current.focus();
    }, []);


    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPwd(result);
        const match = password === confirmPassword;
        setConfirmMatch(match);
    }, [password, confirmPassword]);




    // function handleSnackbarClose() {
    //     setSnackbarOpen(false);
    //   }

    // async function registerUser(event) {
    //     event.preventDefault() ;
    // //     console.log("user registering")

    //     if (!username || !email || !password || !confirmPassword) {
    //         setMessage('Please fill in all the fields');
    //         return;
    //     }

    //     if (!emailRegex.test(email)) {
    //         setMessage('Please enter a valid email address');
    //         return;
    //     }

    //     if (password !== confirmPassword) {
    //         setMessage('Passwords do not match');
    //         return;
    //     }

    //     setMessage('')
    //     const response = await axios.get(`${apiUrl}/signup`, {
    //         //directions
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json', //sends as JSON
    //         },
    //         //payload
    //         body: JSON.stringify({
    //             username,
    //             email,
    //             password,
    //         }),
    //     })

    //     try{
    //         const data = await response.json()
    //         console.log(data)
    //         setSnackbarMessage("Your account has been created!");
    //         setSnackbarOpen(true);
    //         props.handleSignupClose();
    //     } catch {
    //         setSnackbarMessage("Something went wrong. Please try again.");
    //         setSnackbarOpen(true);
    //         return;
    //     }
    //     loginUser(event);
    // }

    // function signupConfirmation() {
    //     return (
    //         <div>
    //             You have signed up!
    //         </div>
    //     )
    // }

    // //sends login data
    // async function loginUser(event) {

    //     event.preventDefault() 
    
    //     const response = await axios.post(`${apiUrl}/signup`, {
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
		// if (data.user) {
        //     console.log(data.user)
        //     console.log(data.user._id)
		// 	localStorage.setItem('token', data.user)
        //     getUsername()
        //     handleLogin()
        //     // navigate('/');
		// } else {
    //         console.log(data)
    //         setSnackbarMessage("Something went wrong. Please try again.");
    //         setSnackbarOpen(true);
	// 	}
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
                    // onSubmit={registerUser}
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
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <TextField
                    required
                    label="Email"
                    className="account-textfield"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={validEmail ? "false" : "true"}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}

                />
                <br/>
                <TextField
                    required
                    label="Password"
                    className="account-textfield"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={validPwd ? "false" : "true"}
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}

                />
                <TextField
                    required
                    label="Confirm Password"
                    className="account-textfield"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    aria-invalid={confirmMatch ? "false" : "true"}
                    onFocus={() => (true)}
                    onBlur={() => setConfirmMatch(false)}

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
            {/* <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
        /> */}
        </div>
    )};

export default SignUpUser;
