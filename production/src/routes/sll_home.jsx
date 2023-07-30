import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import IMAGES from '../assets/images/Images';

export default function Sll_Home() {
    return (
    <div className="articleDiv">
      <article id="zero-state">
        <h1 id="bigger">Singly-Linked Lists</h1>
          <p id="zero-state">
            Singly-linked lists... the base of so many other data structures.
            Become a superhero in singly-linked lists first, and then you can
            comfortably check out other structures like doubly-linked lists
            and graphs.
            
          </p>
          <div style={{display:'flex', justifyContent:'center'}}>
          
          <Link to="/singly-linked-lists/train-game"><Card sx={{ maxWidth: 345, backgroundColor:'rgba(255,255,255,0.6)' }}>
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
          </div>
      </article>
    </div>
    );
  }