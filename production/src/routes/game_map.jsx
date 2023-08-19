import IMAGES from '../assets/images/Images';
import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"
import MapSVG from "../assets/images/mapSVG"
import Nodeman from "../assets/images/nodeman"
import Skeleton from '@mui/material/Skeleton';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Game_Map() {
    const [loaded, setLoaded] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [user, setUser] = useState({}); // Change to object
    const [open, setOpen] = useState(true);

    const handleClose = (()=>{
        setOpen(false);
    })

    const fetchUserData = async () => {
    try {
      const response = await fetch("/data-vengers/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
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

    useEffect(()=>{
        setUserEmail(user.email)
    }, [user.email]);

    {/*required stuff to make the waves exist*/}
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      }
    
    async function subtractPoints(points){
        const response = await fetch(`/data-vengers/api/spendPoints`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', //sends as JSON
        },
        //payload
        body: JSON.stringify({ 
            email:userEmail,
            pointValue:points,
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

    async function unlockDLL(){   
    handleClose();
    console.log("You clicked to unlock DLL!");
    const response = await fetch(`/data-vengers/api/unlockDLL`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', //sends as JSON
        },
        //payload
        body: JSON.stringify({ 
            email:userEmail,
        }),
        })
        .then(subtractPoints(25))
        .then(location.reload());
        try{
        const data = await response.json()
        console.log(data)
        } catch {
        console.log("error from the Account page");
            return;
        }
      }

      async function unlockSQ(){   
        handleClose();
        console.log("You clicked to unlock Stacks & Queues!");
        const response = await fetch(`/data-vengers/api/unlockSQ`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //sends as JSON
            },
            //payload
            body: JSON.stringify({ 
                email:userEmail,
            }),
        })
        .then(subtractPoints(50))
        .then(location.reload());
        try{
        const data = await response.json()
        console.log(data)
        } catch {
        console.log("error from the Account page");
            return;
        }
    }

    async function unlockTrees(){   
        handleClose();
        console.log("You clicked to unlock Trees!");
        const response = await fetch(`/data-vengers/api/unlockTrees`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //sends as JSON
            },
            //payload
            body: JSON.stringify({ 
                email:userEmail,
            }),
        })
        .then(subtractPoints(75))
        .then(location.reload());
        try{
            const data = await response.json()
            console.log(data)
        } catch {
            console.log("error from the Account page");
            return;
        }
        
    }
        
    async function unlockTries(){   
        handleClose();
        console.log("You clicked to unlock Stacks & Queues!");
        const response = await fetch(`/data-vengers/api/unlockTries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //sends as JSON
            },
            //payload
            body: JSON.stringify({ 
                email:userEmail,
            }),
        })
        .then(subtractPoints(100))
        .then(location.reload());
        try{
        const data = await response.json()
        console.log(data)
        } catch {
        console.log("error from the Account page");
            return;
        }
        
    }

    return (
        <> 
        <div id="mapWrapper">
            {/* ocean waves */}
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
                        // move:{
                        //     direction:"none",
                        //     enable:true,
                        //     outModes:{
                        //         default:"bounceHorizontal",
                        //     },
                        //     random:false,
                        //     speed:1,
                        //     straight:false,
                        // },
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
                            minimumValue: 0.3,
                        },
                        value: 2,
                        },
                        shape: {
                        type: 'triangle',                
                        },
                        size: {
                        random: {
                            enable: true,
                            minimumValue: 6,
                        },
                        value: 4
                        }
                    }
                }}
                />  
            </div>
            
            {/*island*/}
            <div className="parentLayer">
            {loaded ? null : 
                <div id="loadingDiv" style={{marginLeft:150}}>
                    <Skeleton variant="circular" width={120 + 'vh'} height={80 +'vh'}/>
                </div>
            }
                <img className="mapImg" src={IMAGES.layer1 } style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/>
                <div className="childLayer" id="messageDiv">
                    {user.overallPoints == 0 && !user.DLLUnlocked && (
                        <Dialog open={open} onClose={handleClose} >
                        <DialogTitle>Welcome to the island!</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Checkout the schoolhouse to see all the games and quizzes you've unlocked, or
                            click the library for all the articles if you're more of a reader. Clicking the 
                            train station will lead you to Singly-Linked List specific activities.  And before
                            you know it, you'll have earned enough points to start finding out what's hiding among
                            all those trees...
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                      </Dialog>
                    )}
                    {user.overallPoints >=25 && user.currentPoints >=25 && !user.DLLUnlocked && (
                        <Dialog open={open} onClose={handleClose} >
                        <DialogTitle>Well done!</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Hey there, DSAvenger! Looks like you earned enough points to unlock a new region! Would you like to do that now?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={unlockDLL}>Yes</Button>
                          <Button onClick={handleClose}>No</Button>
                        </DialogActions>
                      </Dialog>
                    )}
                    {user.overallPoints >= 50 && user.currentPoints >=50 && !user.sqUnlocked && user.DLLUnlocked && (
                        <Dialog open={open} onClose={handleClose} >
                        <DialogTitle>Woohoo!</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Look at you, DSAvenger! You must be getting hungry. How about using 50 of those points to unlock a new region?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={unlockSQ}>Yes</Button>
                          <Button onClick={handleClose}>No</Button>
                        </DialogActions>
                      </Dialog>
                    )}
                    {user.overallPoints >= 75 && user.currentPoints >= 75 && !user.treesUnlocked && user.sqUnlocked && (
                        <Dialog open={open} onClose={handleClose} >
                        <DialogTitle>Astounding!</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            You're doing fantastic, DSAvenger! How about a little break in a park? Want to spend 75 points to unlock a new region?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={unlockTrees}>Yes</Button>
                          <Button onClick={handleClose}>No</Button>
                        </DialogActions>
                      </Dialog>
                    )}
                    {user.overallPoints >= 100 && user.currentPoints >= 100 && !user.triesUnlocked && user.treesUnlocked && (
                        <Dialog open={open} onClose={handleClose} >
                        <DialogTitle>Magnificent!</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            You've nearly unlocked the whole map, DSAvenger! You deserve a treat - let's unlock that last section for 100 points.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={unlockTries}>Ok</Button>
                          <Button onClick={handleClose}>No</Button>
                        </DialogActions>
                      </Dialog>
                    )}
                </div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer2} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                
                {user.triesUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer3a} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                {user.treesUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer3b} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                {user.sqUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer3c} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer3d} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                
                {!user.treesUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer4a} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                {!user.triesUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer4b} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer4} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                
                
                {user.DLLUnlocked == 1 && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer5} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer6} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer7} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer8} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                
                {user.DLLUnlocked == 1 && (
                    <div className="childLayer" id="train"><img className="mapImg" src={IMAGES.train} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer10} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                
                {user.sqUnlocked &&(
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer11} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer12} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                {user.triesUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer13} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer14} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                
                {user.treesUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer15} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                {!user.DLLUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer18} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                {!user.sqUnlocked && (
                    <div className="childLayer"><img className="mapImg" src={IMAGES.layer19} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>)}
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer16} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer17} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                
                <div className="childLayer">
                    <div className="svgContainer"><MapSVG style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                </div>
                <div className="childLayer" id="nodeman">
                    <Nodeman id="nodemanSVG" style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/>
                </div>
            </div>
        </div>
        </>
    );
}