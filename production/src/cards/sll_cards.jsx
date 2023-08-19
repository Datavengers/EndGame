import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import IMAGES from '../assets/images/Images'


export function SLL_learning_card(){
    return(
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
    )
}
export function SLL_Train_card(){
    return(
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
    )
}
export function SLL_quiz1() {
    return(
        <Link to="/sllq"style={{textDecoration:'none'}}>
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
    )
}
export function SLL_educatio_Card() {
    return(
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
    )
}
export function SLL_GFG_Card() {
    return (
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
    )}