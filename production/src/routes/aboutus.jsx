import Skeleton from '@mui/material/Skeleton'
import React, { useState, useContext } from 'react'
import IMAGES from '../../src/assets/images'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const [loaded, setLoaded] = useState(false);

  return (
      <div className="articleDiv">
      <div>
        <h1> Meet the Team</h1>
        <p id="aboutus_p"> For this final project of TechWise by TalentSprint, sponsored by Google, the five of us - all working, studying, or both at the same time - were able to participate in various ways and get this project off the ground.
            This would not have been possible without the education, guidance, and support from the educators at the Community College of Allegheny County, the Demoines Area Community College, and the University of Nevada Reno.
        </p>
        {loaded ? null: ( 
          <div style={{display: 'flex', flexFlow:'row wrap', justifyContents: 'center'}}>
          <Skeleton style={{margin:1.5+'vw'}} variant="rectangular" width={35+'vh'} height={35+'vh'}/>
          <Skeleton style={{margin:1.5+'vw'}} variant="rectangular" width={35+'vh'} height={35+'vh'}/>
          <Skeleton style={{margin:1.5+'vw'}} variant="rectangular" width={35+'vh'} height={35+'vh'}/>
          <Skeleton style={{margin:1.5+'vw'}} variant="rectangular" width={35+'vh'} height={35+'vh'}/>
          <Skeleton style={{margin:1.5+'vw'}} variant="rectangular" width={35+'vh'} height={35+'vh'}/>
          </div>)}
        <div style={{display:'flex', flexFlow: 'row wrap', justifyContent:'center'}}>
          <Link to ="https://www.linkedin.com/in/ashley-butela" target="_blank">
          <Link to ="https://www.github.com/abutela" target="_blank">
          <Card onLoad={setLoaded(true)} className ="card" sx={{ width: 35+'vh', margin:1.5 +'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardActionArea>
              <CardContent>
              <CardMedia component='img' image={IMAGES.ashley} alt='Photo of Ashley Butela'/>
                <Typography className="card_name" variant="h4" color="text.primary">
                  Ashley
                </Typography>
                <Typography variant="h5" color="text.secondary" component="div">
                  Frontend Renegade
                </Typography> 
                <Typography variant="body2" style={{fontFamily:'Maven Pro', fontSize:1.6+'vh'}}>
                  Community College of Allegheny County grad &apos;23.  Planning a certificate in UX/UI. Would love a creative tech job.  Other projects found on GitHub include NostalgiaBox, a retro tv-viewing experience,
                  and Jihanki3000, a stylized Japanese vending machine.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          </Link>

          <Link to="https://www.linkedin.com/in/amy-c-9b7a9a23b/" target="_blank">
          <Link to="https://github.com/pghgal317" target="_blank">
          <Card className ="card"sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
            <CardMedia component='img' image={IMAGES.amy} alt='Photo of Amy Ciuffoletti'/>
              <Typography className="card_name" variant="h4" color="text.primary">
                Amy
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Backend Powerhouse
              </Typography>
              <Typography variant="body2" style={{fontFamily:'Maven Pro', fontSize:1.6+'vh'}}>
                CCAC anticipated grad &apos;24. Backend developer with background in Music Education. Would love career in STEAM education, 
                LMS dev/admin, Technology education, integration, & outreach (or with NASA).  
              </Typography>
            </CardContent>
          </Card>
          </Link>
          </Link>

          <Link to='https://www.linkedin.com/in/viktoriia-denys/' target="_blank">
          <Link to="https://www.github.com/vdenys93" target="_blank">
          <Card sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
            <CardMedia component='img' image={IMAGES.viktoriia} alt='Photo of Viktoriia Denys'/>
              <Typography className="card_name" variant="h4" color="text.primary">
                Viktoriia
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Backend Ninja
              </Typography>
              <Typography variant="body2" style={{fontFamily:'Maven Pro', fontSize:1.6+'vh'}}>
                Computer Information Systems major at DMACC with a background in Accounting and Audit!                 
              </Typography>
            </CardContent>
          </Card>
          </Link>
          </Link>

          <Link to="https://www.linkedin.com/in/jordan-rood/" target="_blank">
          <Link to="https://www.github.com/rood-jordan" target="_blank">
          <Card sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
            <CardMedia component='img' image={IMAGES.jordan} alt='Photo of Jordan Rood'/>
              <Typography className="card_name" variant="h4" color="text.primary">
                Jordan
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Frontend Warrior
              </Typography>
              <Typography variant="body2" style={{fontFamily:'Maven Pro', fontSize:1.6+'vh'}}>
                Undergraduate student at the University of Nevada, Reno majoring in Computer Science & Engineering, and minoring in Mathematics.
                Also currently a Software Engineering Intern at IGT.  Interests include full-stack web development, artificial intelligence, and embedded system work.
              </Typography>
            </CardContent>
          </Card>
          </Link>
          </Link>

          <Link to="https://www.linkedin.com/in/fionnlagh-jones/">
          <Link to="https://www.github.com/fionnlaghjones">
          <Card sx={{ width: 35+'vh', margin:1.5+'vw', backgroundColor:'rgba(255,255,255,0.5)',borderRadius:15+'px'}}>
            <CardContent>
            <CardMedia component='img' image={IMAGES.finnly} alt='Photo of Fionnlagh Jones'/>
              <Typography className="card_name" variant="h4" color="text.primary">
                Fionnlagh
              </Typography>
              <Typography variant="h5" color="text.secondary" component="div">
                Rubber Ducky (Technical Issue Support)
              </Typography>
              <Typography variant="body2" style={{fontFamily:'Maven Pro', fontSize:1.6+'vh'}}>
                CCAC anticipated grad 2024. Jr Software Engineer with a background in Electrical Engineering and Aviation aerospace defense. Enjoyer of PHP.
              </Typography>
            </CardContent>
          </Card>
          </Link>
          </Link>
        </div>
      </div>
      </div>
    );
  }