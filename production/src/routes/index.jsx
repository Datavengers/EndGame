import Skeleton from '@mui/material/Skeleton'
import { useState, useContext } from 'react'
import { Link, redirect } from 'react-router-dom';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {LoginContext} from '../LoginContext';

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const [auth, setAuth] = useState(true);
  // const { username, isLoggedIn } = useContext(LoginContext);

  return (
      <div className="articleDiv">
      {loaded?null:<Skeleton onLoad={setLoaded(true)}/>}
      <article id="zero-state" style={{fontSize:1.2+'em'}}>
        <h1 id="biggest">DATA STRUCTURES ARE SO BORING</h1>
        <h1 id = "bigger">WHY DO I NEED TO LEARN THIS</h1>
        <h1 id = "big">I can just use an array...</h1>
        <p>
          Data structures and more advanced algorithms can be tough.
          Tough to teach, tough to learn, and tough to apply, at least until
          you really understand what exactly these trees and tries and
          heaps and stacks are actually doing.
        </p>
        <br/>
        <p>
          We here at Datavengers hope that EndGame will help with all three
          of those pesky problems: getting you a better resource, a better
          understanding, and perhaps even a better experience learning
          what these data structures and algorithms (DSA) are all about.
        </p>
        <br/>
        <div style={{display:'flex', justifyContent:'center'}}>
          <Card className ="card" sx={{ width: 30+'vh', margin:1.5 +'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Read
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                Read up on DSA from multiple angles
              </Typography>
              <Typography variant="body2">
                Maybe one website is tough to parse, but another is clear. Check out our vetted resources to help out!
              </Typography>
            </CardContent>
          </Card>
          <Card className ="card"sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Play
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Cement those concepts with fun games!
              </Typography>
              <Typography variant="body2">
                Can you traverse a tree in under 10 seconds? Grab all the tickets from passengers? Put together a linked list?
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 30+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Reward
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Get points for all your effort!
              </Typography>
              <Typography variant="body2">
                Points can be used to progress, but also to change up your avatar or other fun bonuses!
              </Typography>
            </CardContent>
          </Card>
        </div>
        <br/>
        <p style={{fontWeight:'bold'}}>
          Are you ready to dive in? Because of our gamification
          of DSA, you need to have a user account before you can
          dive in.  <Link to="/signup" style={{color:'blue'}}>Create an account here.</Link>
        </p>
        <br/>
        <p>
          Already a member? Welcome back! <Link to="/login" style={{color:'blue'}}>Login here.</Link>
        </p>
        </article>
      </div>
    );
  }