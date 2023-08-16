import Skeleton from '@mui/material/Skeleton'
import React, { useState, useContext } from 'react'
import { Link, redirect } from 'react-router-dom';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AboutUs() {
  const [loaded, setLoaded] = useState(false);

  return (
      <div className="articleDiv">
        {loaded?null:<Skeleton variant="rectangular" width={210} height={210}/>}
        {loaded?null:<Skeleton variant="rectangular" width={210} height={210}/>}
        {loaded?null:<Skeleton variant="rectangular" width={210} height={210}/>}
        {loaded?null:<Skeleton variant="rectangular" width={210} height={210}/>}
        {loaded?null:<Skeleton variant="rectangular" width={210} height={210} onLoad={setLoaded(true)}/>}

      <div>
        <h1> Meet the Team</h1>
        <p style={{fontSize: 2+'vh'}}> For this final project of TechWise by TalentSprint, sponsored by Google, the five of us - all working, studying, or both at the same time - were able to participate in various ways and get this project off the ground.
            This would not have been possible without the education, guidance, and support from the educators at the Community College of Allegheny County, the Demoines Area Community College, and the University of Nevada Reno.
        </p>
        <div style={{display:'flex', flexFlow: 'row wrap', justifyContent:'center'}}>
          <Card className ="card" sx={{ width: 35+'vh', margin:1.5 +'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Ashley
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Frontend Renegade
              </Typography>
              <Typography variant="body2">
                Community College of Allegheny County grad &apos;23.  Planning a certificate in UX/UI. Would love a creative tech job.  Other projects found on Github include NostalgiaBox, a retro tv-viewing experience,
                and Jihanki3000, a stylized Japanese vending machine.
              </Typography>
            </CardContent>
          </Card>
          <Card className ="card"sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Amy
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Backend Powerhouse
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quisquam facilis cum fuga?
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Viktoriia
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Backend Ninja
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quisquam facilis cum fuga?
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Jordan
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Title
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quisquam facilis cum fuga?
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
              <Typography variant="h4" color="text.primary" gutterBottom>
                Fionnlagh
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Title
              </Typography>
              <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quisquam facilis cum fuga?
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    );
  }