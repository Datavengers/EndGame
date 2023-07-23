import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { LoginContext } from '../LoginContext'; //this will be very useful when we're ready
import Particles from 'react-tsparticles';
import {loadFull} from "tsparticles"

export const Login = (props) => {

    //what the user enters
    // const [email, setEmail] = React.useState('')
    // const [password, setPassword] = React.useState('')
    // const [ message, setMessage ] = React.useState('')

    // const { handleLogin, getUsername } = React.useContext(LoginContext);

    //sends login data
    // async function loginUser(event) {

    //     event.preventDefault() 
    
    //     const response = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/login`, {
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
	// 	if (data.user) {
    //         console.log(data.user)
    //         console.log(data.user._id)
	// 		localStorage.setItem('token', data.user)
    //         getUsername()
    //         handleLogin()
    //         setMessage('')
    //         // navigate('/');
    //         props.handleLoginClose()
	// 	} else {
    //         console.log(data)
	// 		setMessage('Please check your login details')
	// 	}
	// }

    {/*required stuff to make the waves exist*/}
    // const particlesInit = async (main) => {
    //     console.log(main);
    //     await loadFull(main);
    // };

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // }

    return (
        <div id="wrap">
            {/* ocean waves
            <div id="particles-js">
                <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: '#2ba3f5',
                    },
                    fpsLimit: 20,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                        resize: true,
                        },
                    },
                    particles: {
                        color: {
                        value: "#ffffff"
                        },
                        number: {
                        density: {
                            enable: false,
                            area:1080
                        },
                        limit: 0,
                        value: 500,
                        },
                        opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.5,
                            speed: 4,
                            sync: true,
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.2,
                        },
                        value: 2,
                        },
                        shape: {
                        type: 'triangle',
                
                        },
                        size: {
                        random: {
                            enable: true,
                            minimumValue: 5,
                        },
                        value: 2
                        }
                    }
                }}
                />  
            </div> */}
            <div className="loginDiv">
                <h1 style={{marginBottom: '10px'}}>Welcome back!</h1>
                <h3 style={{marginBottom: '25px'}}>Please login below</h3>
                <Box
                    className="account-fields"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                        '& .Mui-focused': { color: '#FFFFFF' },
                        '& .Mui-active': { color: '#FFFFFF' },
                        '& .Mui-filled': { color: '#FFFFFF' },
                    }}
                    noValidate
                    autoComplete="off"
                    // onSubmit={loginUser} //login called here
                >
    
                <TextField
                    className="account-textfield"
                    required
                    label="Email"
                    type="email"
                    // onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <TextField
                    className="account-textfield"
                    required
                    label="Password"
                    type="password"
                    // onChange={(e) => setPassword(e.target.value)}
                />


                <p 
                    style={{
                        textAlign: 'center', 
                        fontSize: '14px', 
                        margin: '10px'}}
                >
                    <Link to="/forgot">Forgot Password?</Link>
                </p>
                <Button
                    sx={{ 
                        textAlign: 'center',
                        background: '#F0F8FF',
                        m: '25px 0px 30px',
                        width: '130px'
                    }}
                    id="submit-btn"
                    type="submit"
                    variant="outlined"
                >
                    Sign In
                </Button>
                </Box>
                <p>
                    Psst... don't have an account yet?<br/>
                    Sign up <Link to="/signup">here!</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;