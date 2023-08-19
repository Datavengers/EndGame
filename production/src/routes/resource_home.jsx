import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import IMAGES from '../assets/images/Images';

export default function Resources_Home() {
  const [user, setUser] = useState('');
  const [loaded, setLoaded] = useState(false);

  const API_URL = '/data-vengers';
  // const API_URL = 'http://localhost:8125'; // Your backend server URL

  const ARTICLE_POINT_VALUE = 3;

  const fetchUserData = async () => {
      try {

        const response = await fetch(`${API_URL}/api/user`, {

          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });

        if (response.status === 200) {
          const data = await response.json();
          setUser(data);
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
    return (
      <>
      <div className="libraryDiv">
        <article id="zero-state"style={{fontSize:1.2+"em"}}>
          <h1 id="bigger">The Schoolhouse - for active learning</h1>
            <p id="zero-state" style={{fontSize:1.1+"em", margin:25}}>
              Welcome to the schoolhouse! Get ready to rock out with games or try your hand at all those quizzes you've unlocked.
            </p>
            <div style={{display:'flex', flexFlow:'row wrap',justifyContent:'center'}}>
            <Link to="/singly-linked-lists/train-game"style={{textDecoration:'none'}}>
            <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={IMAGES.trainimg}
                alt="train game"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Play the Train Game!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Can you successfully traverse a singly-linked train and collect all the passengers' tickets?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          <Link to="/sllq" style={{textDecoration:'none'}}>
            <Card sx={{ margin: 2.5, width:300, height:275,  backgroundColor:'rgba(255,255,255,0.6)' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={IMAGES.quiz}
                  alt="SLL Quiz"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    SLL Quiz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Links, types, time capacity... So much to remember! What's the highest score you can get?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          {user.DLLUnlocked && (
            <>
            <Link to="/doubly-linked-lists/dll-train-game"style={{textDecoration:'none'}}>
            <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={IMAGES.trainimg}
                alt="train game"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Play the DLL Train Game!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Can you successfully traverse a DLL train and collect all the passengers' tickets?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          <Link to="/dllq"style={{textDecoration:'none'}}>
          <Card sx={{ margin: 2.5, width:300, height:275,  backgroundColor:'rgba(255,255,255,0.6)' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={IMAGES.quiz}
                alt="SLL Quiz"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  DLL Quiz
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Links, types, time capacity... So much to remember! What's the highest score you can get?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        </>
          )}

{user.sqUnlocked && (
            <>
            <Link to=""style={{textDecoration:'none'}}>
                  <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                  <CardActionArea>
                      <CardMedia 
                      component="img" 
                      height="140" 
                      image={IMAGES.quiz}
                      alt="Doubly Linked List Learning Content" />
                      <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Website
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                          Article Title               
                        </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum visible only if user has unlocked Stacks & Queues
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  </Card>
              </Link>
            </>
          )}

          {user.treesUnlocked && (
            <>
            <Link to=""style={{textDecoration:'none'}}>
                  <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                  <CardActionArea>
                      <CardMedia 
                      component="img" 
                      height="140" 
                      image={IMAGES.quiz}
                      alt="Doubly Linked List Learning Content" />
                      <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Website
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                          Article Title               
                        </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum visible only if user has unlocked Trees
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  </Card>
              </Link>
            </>
          )}

          {user.triesUnlocked && (
            <>
            <Link to="" style={{textDecoration:'none'}}>
                  <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                  <CardActionArea>
                      <CardMedia 
                      component="img" 
                      height="140" 
                      image={IMAGES.quiz}
                      alt="Doubly Linked List Learning Content" />
                      <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Website
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                          Article Title               
                        </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Lorem Ipsum visible only if user has unlocked Tries
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  </Card>
              </Link>
            </>
          )}
            </div>
          </article>
          </div>
        </>
   )
  }