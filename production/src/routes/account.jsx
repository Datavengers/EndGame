import Skeleton from '@mui/material/Skeleton'
import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import IMAGES from '../assets/images/Images';
import Button from '@mui/material/Button';
// import {LoginContext} from '../LoginContext';

export default function Account() {
  const [loaded, setLoaded] = useState(false);
  // const { username, isLoggedIn } = useContext(LoginContext);

  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/5")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  };

  useEffect(() => {
    fetchUserData()
  }, []);

  function restartAccount(){
    console.log("You clicked restart account!");
  }

  function deleteAccount(){
    console.log("You clicked delete account!");
  }

  function changeUsername(){
    console.log("You clicked change username field!");
  }

  function changeEmail(){
    console.log("You clicked the change email field!");
  }

  return (
        <div className="accountWrapper">
            <div id="dataDiv">
                <p id="greeting"><b>Howdy, {users.username}!</b><br/>
                    Your accout details:</p>
                <p id="nickname"><b>Nickname:</b> {users.username}</p>
                <p className="change" id="change1" onClick={changeUsername}><b>Change</b></p>
                <p id="email"><b>Email:</b> {users.email}</p>
                <p className="change" id="change2" onClick={changeEmail}><b>Change</b></p>
                <div id="restart"><Button onClick={restartAccount}>Delete Progress</Button></div>
                <div id="delete"><Button onClick={deleteAccount}>Delete Account</Button></div>
            </div>
        </div>
    );
  }