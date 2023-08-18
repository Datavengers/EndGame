import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import IMAGES from '../assets/images/Images'
import {useEffect, useState} from 'react'

export function DLL_learning_card(){  
  
  return(
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
    )
}
export function DLL_Train_card(){
    return(
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
    )
}
export function DLL_quiz1() {
    return(
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
    )
}
export function DLL_javatpoint_Card() {

  return(
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
  )
}
export function DLL_GFG_Card() {
  return (
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
    )}