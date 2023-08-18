import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import IMAGES from '../assets/images/Images';

export default function Readings() {
  const [user, setUser] = useState('');
  const [loaded, setLoaded] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user", {
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
        <h1 id="bigger">The Library - A Home for Resources</h1>
          <p id="zero-state" style={{fontSize:1.1+"em", margin:25}}>
            Welcome to the library! Here you'll find all the articles you've unlocked.
          </p>
          <div style={{display:'flex', flexFlow:'row wrap',justifyContent:'center'}}>
          <Link to="/singly-linked-lists/sll-learning"style={{textDecoration:'none'}}>
            <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
              <CardActionArea>
                <CardMedia 
                component="img" 
                height="140" 
                image={IMAGES.learning}
                alt="Singly Linked List Learning Content" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Staff Article
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    What are singly-linked lists all about? Read our staff's take on this essential structure.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="https://www.educative.io/answers/what-is-a-singly-linked-list" target="_blank" style={{textDecoration:'none'}}>
              <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                <CardActionArea>
                    <CardMedia 
                    component="img" 
                    height="140" 
                    image={IMAGES.learning}
                    alt="Singly Linked List Learning Content" />
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      Educative.io
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        What is SLL?               
                      </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Explore this resource to learn even more about singly linked lists!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Link>
            <Link to="https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/" target="_blank" style={{textDecoration:'none'}}>
                <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                <CardActionArea>
                    <CardMedia 
                    component="img" 
                    height="140" 
                    image={IMAGES.learning}
                    alt="Singly Linked List Learning Content" />
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      Geeks for Geeks
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Singly Linked List                 
                      </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Additional resource to learn more about singly linked lists!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Link>
          {user.DLLUnlocked && (
            <>
            <Link to="/doubly-linked-lists/dll-learning"style={{textDecoration:'none'}}>
              <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                <CardActionArea>
                  <CardMedia 
                  component="img" 
                  height="140" 
                  image={IMAGES.learning}
                  alt="Singly Linked List Learning Content" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Staff Article
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Check out our staff's great take on doubly-linked lists!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
              <Link to="https://www.geeksforgeeks.org/data-structures/linked-list/doubly-linked-list/" target="_blank" style={{textDecoration:'none'}}>
                  <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                  <CardActionArea>
                      <CardMedia 
                      component="img" 
                      height="140" 
                      image={IMAGES.learning}
                      alt="Doubly Linked List Learning Content" />
                      <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        Geeks for Geeks
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                          Doubly Linked List                
                        </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Explore this resource to learn even more about doubly linked lists!
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  </Card>
              </Link>
              
              <Link to="https://www.javatpoint.com/doubly-linked-list" target="_blank" style={{textDecoration:'none'}}>
                  <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                  <CardActionArea>
                      <CardMedia 
                      component="img" 
                      height="140" 
                      image={IMAGES.learning}
                      alt="Doubly Linked List Learning Content" />
                      <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        JavaTPoint
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                          Doubly Linked List                 </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Explore this additional resource to learn extra about doubly linked lists!
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
    );
  }