import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LoginContext } from '../LoginContext';
import {  useNavigate } from 'react-router-dom'

export default function Account() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState({});
  const [nameOpen, setNameOpen] = useState(false);      // controls change username dialog
  const [resetOpen, setResetOpen] = useState(false);    // controls reset account dialog
  const [emailOpen, setEmailOpen] = useState(false);    // controls change email dialog
  const [deleteOpen, setDeleteOpen] = useState(false);  // controls delete account dialog
  const [newUsername, setNewUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogout } = useContext(LoginContext);

  const handleNameOpen = () => {
    setNameOpen(true);
  };

  const handleNameClose = () => {
    setNameOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleEmailOpen = () => {
    setEmailOpen(true);
  };

  const handleEmailClose = () => {
    setEmailOpen(false);
  };
  const handleResetOpen = () => {
    setResetOpen(true);
  };

  const handleResetClose = () => {
    setResetOpen(false);
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch("/data-vengers/api/user", {
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


  async function resetAccount() {
    console.log("You clicked reset account!");
    handleResetClose();
    const response = await fetch(`http://localhost:3000/api/resetAccount`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', //sends as JSON
      },
      //payload
      body: JSON.stringify({ 
        email:userEmail,
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

  async function deleteAccount() {
    handleDeleteClose();
    const response = await fetch(`http://localhost:3000/api/deleteAccount`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', //sends as JSON
      },
      //payload
      body: JSON.stringify({ 
        email:userEmail,
      }),
    })
    .then(handleLogout())
    .then(navigate('/'))
    try{
      const data = await response.json()
      console.log(data)
    } catch {
      console.log("error from the Account page");
        return;
    }
  }

  async function changeUsername(e) {
    handleNameClose();
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

  async function changeEmail() {
    handleEmailClose();
    const response = await fetch(`http://localhost:3000/api/changeEmail`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', //sends as JSON
      },
      //payload
      body: JSON.stringify({ 
        oldEmail: userEmail,
        newEmail: newEmail,
        password: password,
      }),
    })
    .then(handleLogout)
    .then(navigate('/login'))

    try{
        const data = await response.json()
        console.log(data)
    } catch {
      console.log("error from the Account page");
        return;
    }
  }

  return (
    <div className="accountWrapper">
      {loaded ? (
        <div id="dataDiv">
          <p id="greeting"><b>Howdy, {users.username}!</b><br />
            Your account details:</p>
          
          <p id="nickname"><b>Nickname:</b> {users.username}</p>
          <p className="change" id="change1" onClick={handleNameOpen}><b>Change</b></p>
          <Dialog open={nameOpen} onClose={handleNameClose}>
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
              <Button onClick={handleNameClose}>Nevermind</Button>
              <Button onClick={changeUsername}>Make it so</Button>
            </DialogActions>
          </Dialog>

          <p id="email"><b>Email:</b> {users.email}</p>
          <p className="change" id="change2" onClick={handleEmailOpen}><b>Change</b></p>
          <Dialog open={emailOpen} onClose={handleEmailClose}>
            <DialogTitle>Change Email</DialogTitle>
            <DialogContent>
              <DialogContentText>
                What new e-mail should we connect you to? (Note: You'll need to login again afterwards.)
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="newEmail"
                label="New Email"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Current Password"
                type="password"
                fullWidth
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEmailClose}>Nevermind</Button>
              <Button onClick={changeEmail}>Make it so</Button>
            </DialogActions>
          </Dialog>

          <div id="restart"><Button onClick={handleResetOpen}>Delete Progress</Button></div>
            <Dialog open={resetOpen} onClose={handleResetClose}>
              <DialogTitle>Reset Account</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to reset your account? You'll lose access to all unlocked areas, any prizes purchased, and your overall points will be reset to 0.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleResetClose}>Nevermind</Button>
                <Button onClick={resetAccount}>Make it so</Button>
              </DialogActions>
            </Dialog>

          <div id="delete"><Button onClick={handleDeleteOpen}>Delete Account</Button></div>
            <Dialog open={deleteOpen} onClose={handleDeleteClose}>
              <DialogTitle>Delete Account</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to delete your account? This action cannot be undone!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDeleteClose}>Nevermind</Button>
                <Button onClick={deleteAccount}>Make it so</Button>
              </DialogActions>
            </Dialog>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
