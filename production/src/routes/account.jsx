import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Account() {
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState({});
  const [open, setOpen] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  useEffect(()=>{
    setUserEmail(users.email);
  }, [users.email])


  function restartAccount() {
    console.log("You clicked restart account!");
    // Add your code for restarting the account here
  }

  function deleteAccount() {
    console.log("You clicked delete account!");
    // Add your code for deleting the account here
  }

  async function changeUsername(e) {
    console.log("The new username is: " + newUsername);
    console.log("The user's email for comparison is: " + userEmail);
    handleClose();
    console.log("You clicked change username field!");
    const response = await fetch(`http://localhost:3000/api/changeUsername`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', //sends as JSON
      },
      //payload
      body: JSON.stringify({ 
        email:userEmail,
        newname: newUsername,
      }),
  })

  try{
      const data = await response.json()
      console.log(data)
  } catch {
    console.log("error from the Account page");
      return;
  }
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
          <p className="change" id="change1" onClick={handleClickOpen}><b>Change</b></p>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Change Nickname</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter a username you really like below:
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="newUsername"
                label="NewUsername"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Nevermind</Button>
              <Button onClick={changeUsername}>Make it so</Button>
            </DialogActions>
          </Dialog>
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
