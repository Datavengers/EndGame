import Skeleton from '@mui/material/Skeleton'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import IMAGES from '../assets/images/Images'
// import {LoginContext} from '../LoginContext';

export default function Stats() {
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

  return (
        <div className="wrapperDiv">
            <p>Howdy, {users.username}!</p>
            <br/>
            <div className="statsDiv">
            {loaded?null:<Skeleton onLoad={setLoaded(true)}/>}
                <div className="statsBlocks" id="currentPointsDiv">
                    <h1>Your Points</h1>
                    <p>{users.id}</p>
                </div>

                <div className="statsBlocks" id="alltimeDiv">
                    <h1> All-Time Points</h1>
                    <p>1000</p>
                </div>

                <div id="logoDiv">
                    <img src={IMAGES.nodeman} alt="nodeman" width="50%"/>
                </div>

                <div className="statsBlocks" id="unlockedDiv">
                    <h1>Unlocked Topics:</h1>
                    <ul>
                        <Link to="/singly-linked-lists">
                            <li>Singly-linked Lists</li>
                        </Link>
                        <Link to="/doubly-linked-lists">
                            <li>Doubly-linked Lists</li>
                        </Link>
                        
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