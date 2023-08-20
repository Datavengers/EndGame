import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import IMAGES from '../assets/images/Images';

const teamMembers = [
  {
    name: 'Ashley',
    role: 'Fullstack Renegade',
    image: IMAGES.ashley,
    linkedin: 'https://www.linkedin.com/in/ashley-butela',
    github: 'https://github.com/abutela',
    bio:
      "Community College of Allegheny County grad &apos;23.  Planning a certificate in UX/UI. Would love a creative tech job.  Other projects found on GitHub include NostalgiaBox, a retro tv-viewing experience, and Jihanki3000, a stylized Japanese vending machine.",
  },
  {
    name: 'Amy',
    role: 'Backend Powerhouse',
    image: IMAGES.amy,
    linkedin: 'https://www.linkedin.com/in/amy-c-9b7a9a23b/',
    github: 'https://github.com/pghgal317',
    bio:
      "CCAC anticipated grad &apos;24. Backend developer with background in Music Education. Would love career in STEAM education, LMS dev/admin, Technology education, integration, & outreach (or with NASA).",
  },
  {
    name: 'Viktoriia',
    role: 'Backend Ninja',
    image: IMAGES.viktoriia,
    linkedin: 'https://www.linkedin.com/in/viktoriia-denys/',
    github: 'https://github.com/vdenys93',
    bio:
      "Computer Information Systems major at DMACC grad &apos;23 with a background in Accounting and Audit. Proficient in React.js, Node, Vite-Express, Java, JavaScript, and Python. A dedicated volunteer striving to make the world a better place.",
  },
  {
    name: 'Jordan',
    role: 'Frontend Warrior',
    image: IMAGES.jordan,
    linkedin: 'https://www.linkedin.com/in/jordan-rood/',
    github: 'https://github.com/Rood-Jordan',
    bio:
      "Undergraduate student at the University of Nevada, Reno majoring in Computer Science & Engineering, and minoring in Mathematics. Also currently a Software Engineering Intern at IGT.  Interests include full-stack web development, artificial intelligence, and embedded system work.",
  },
  {
    name: 'Fionnlagh',
    role: 'Rubber Ducky (Technical Issue Support)',
    image: IMAGES.finnly,
    linkedin: 'https://www.linkedin.com/in/fionnlagh-jones/',
    github: 'https://github.com/FionnlaghJones',
    bio:
      "CCAC anticipated grad &apos;24. Jr Software Engineer with a background in Electrical Engineering and Aviation aerospace defense. Enjoyer of PHP.",
  },
 
];


export default function AboutUs() {
  return (
    <div className="articleDiv">
      <div>
        <h1>Meet the Team</h1>
        <p id="aboutus_p">
        For this final project of TechWise by TalentSprint, sponsored by Google, the five of us - all working, studying, or both at the same time - were able to participate in various ways and get this project off the ground.
            This would not have been possible without the education, guidance, and support from the educators at the Community College of Allegheny County, the Demoines Area Community College, and the University of Nevada Reno.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              sx={{ minWidth: '35vh', maxWidth: '35vh', height: '100%', margin: '1.5vw', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '15px' }}
            >
              <CardActionArea>
                <CardContent>
                  <CardMedia className="aboutPics" component="img" image={member.image} alt={`Photo of ${member.name}`} />
                  <Typography className="card_name" variant="h4" color="text.primary">
                    {member.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" component="div">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" style={{ fontFamily: 'Maven Pro', fontSize: '1.6vh' }}>
                    {member.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem' }}>
                <Button variant="contained" color="primary" href={member.linkedin} target="_blank">
                  LinkedIn
                </Button>
                <Button variant="contained" color="primary" href={member.github} target="_blank">
                  GitHub
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
