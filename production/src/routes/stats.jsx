import Skeleton from '@mui/material/Skeleton'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import IMAGES from '../assets/images/Images'
// import {LoginContext} from '../LoginContext';

export default function Stats() {
  const [loaded, setLoaded] = useState(false);
  // const { username, isLoggedIn } = useContext(LoginContext);
  const [users, setUsers] = useState({}); // Change to object
  
  const API_URL = '/data-vengers';
  // const API_URL = 'http://localhost:8125';

  const fetchUserData = async () => {
    try {

      const response = await fetch(`${API_URL}/api/user`, {

        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(console.log("User loaded as: " + users + ", DLL unlocked? " + users.DLLUnlocked + " SQ Unlocked? " + users.sqUnlocked + " trees unlocked?" + users.treesUnlocked + " tries unlocked? " + users.triesUnlocked));

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
    fetchUserData()
  }, []);

  return (
        <div className="statsWrapper">
            <p>Howdy, {users.username}!</p>
            <br/>
            <div className="statsDiv">
            {loaded?null:<Skeleton onLoad={setLoaded(true)}/>}
                <div className="statsBlocks" id="currentPointsDiv">
                    <h1>Your Points</h1>
                    <p>{users.currentPoints}</p>
                </div>

                <div className="statsBlocks" id="alltimeDiv">
                    <h1> All-Time Points</h1>
                    <p>{users.overallPoints}</p>
                </div>

                <div id="logoDiv">
                    <img src={IMAGES.nodeman} alt="nodeman" width="50%"/>
                </div>

                <div className="statsBlocks" id="unlockedDiv">
                    <h1>Unlocked Topics:</h1>
                    <ul>
                      {users.overallPoints >= 0 && (
                        <Link to="/singly-linked-lists">
                            <li>Singly-linked Lists</li>
                        </Link>)}
                      {users.DLLUnlocked == 1 && (
                        <Link to="/doubly-linked-lists">
                            <li>Doubly-linked Lists</li>
                        </Link>)}
                      {users.sqUnlocked && (
                        <Link to="/sq_home">
                            <li>Stacks & Queues</li>
                          </Link>)}
                      {users.treesUnlocked && (
                        <Link to="/trees_home">
                            <li>Trees</li>
                          </Link>)}
                      {users.triesUnlocked && (
                        <Link to="/tries_home">
                            <li>Tries</li>
                          </Link>)}
                    </ul>
                </div>

                <div className="statsBlocks" id="prizesDiv">
                    <h1>Your Prizes:</h1>
                    <p>Nothing here, yet!</p>
                </div>
                
                <div className="statsBlocks" id="refreshDiv">
                    <h1> Refresh Topics</h1>
                    <p>Looking all good!</p>
                </div>
                
            </div>
      </div>
    );
  }
