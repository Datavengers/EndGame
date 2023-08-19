import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import IMAGES from '../assets/images/Images';
import { SLL_GFG_Card, SLL_educatio_Card, SLL_learning_card } from "../cards/sll_cards";
import { DLL_GFG_Card, DLL_javatpoint_Card, DLL_learning_card } from "../cards/dll_cards";

export default function Readings() {
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


  async function updatePoints() {
      
    const response = await fetch(`${API_URL}/api/gainPoints`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', //sends as JSON
      },
      //payload
      body: JSON.stringify({ 
        email:user.email,
        pointValue:ARTICLE_POINT_VALUE,
      }),
    })
  }
  
  return (
    <>
    <div className="libraryDiv">
      <article id="zero-state"style={{fontSize:1.2+"em"}}>
        <h1 id="bigger">The Library - A Home for Resources</h1>
          <p id="zero-state" style={{fontSize:1.1+"em", margin:25}}>
            Welcome to the library! Here you'll find all the articles you've unlocked.
          </p>
          <div style={{display:'flex', flexFlow:'row wrap',justifyContent:'center'}}>
          <div onClick={updatePoints}><SLL_GFG_Card/></div>
          <div onClick={updatePoints}><SLL_educatio_Card/></div>
          <div onClick={updatePoints}><SLL_learning_card/></div>
          {user.DLLUnlocked && (
            <>
              <div onClick={updatePoints}><DLL_learning_card/></div>
              <div onClick={updatePoints}><DLL_GFG_Card/></div>                
              <div onClick={updatePoints}><DLL_javatpoint_Card/></div>
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
                      image={IMAGES.learning}
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
                      image={IMAGES.learning}
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
                      image={IMAGES.learning}
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
  )}