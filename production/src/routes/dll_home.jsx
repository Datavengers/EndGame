import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import IMAGES from '../assets/images/Images';

export default function Dll_Home() {
    return (
    <div className="articleDiv">
      <article id="zero-state"style={{fontSize:1.2+"em"}}>
        <h1 id="bigger">Doubly-Linked Lists</h1>
          <p id="zero-state" style={{fontSize:1.1+"em", margin:25}}>
            Doubly-linked lists... almost identical to a singly linked list
            with one HUGE difference!  By this point, you should be a super-hero 
            at singly linked lists, so peruse the doubly linked list content, game, 
            and quiz to learn all about the key differences between the two types of 
            linked lists and what makes Doubly-linked lists -- DOUBLY.
          </p>
          <div style={{display:'flex', justifyContent:'center'}}>
          <Link to="/doubly-linked-lists/dll-learning">
            <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
              <CardActionArea>
                <CardMedia 
                component="img" 
                height="140" 
                image={IMAGES.learning}
                alt="Singly Linked List Learning Content" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Doubly Linked Lists
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Read content page so that you can have an in-depth understanding when moving onto game and quiz.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link to="/doubly-linked-lists/dll-train-game">
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
          <Link to="/dllq">
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
          </div>
      </article>
    </div>
    );
  }