import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function Account() {
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState({}); // Change to object

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.status === 200) {
        const data = await response.json();
        setUsers(data);
        setLoaded(true);
      } else {
        console.error('Error fetching user data');
      }
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  function restartAccount() {
    console.log("You clicked restart account!");
    // Add your code for restarting the account here
  }

  function deleteAccount() {
    console.log("You clicked delete account!");
    // Add your code for deleting the account here
  }

  function changeUsername() {
    console.log("You clicked change username field!");
    // Add your code for changing the username here
  }

  function changeEmail() {
    console.log("You clicked the change email field!");
    // Add your code for changing the email here
  }

  return (
    <div className="accountWrapper">
      {loaded ? (
        <div id="dataDiv">
          <p id="greeting"><b>Howdy, {users.username}!</b><br />
            Your account details:</p>
          <p id="nickname"><b>Nickname:</b> {users.username}</p>
          <p className="change" id="change1" onClick={changeUsername}><b>Change</b></p>
          <p id="email"><b>Email:</b> {users.email}</p>
          <p className="change" id="change2" onClick={changeEmail}><b>Change</b></p>
          <div id="restart"><Button onClick={restartAccount}>Delete Progress</Button></div>
          <div id="delete"><Button onClick={deleteAccount}>Delete Account</Button></div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
