import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import IMAGES from '../assets/images/Images';
import { AlignHorizontalCenter, FormatAlignJustify } from '@mui/icons-material';
import React from 'react';



export default function DoublyLinkedListLearning() {

    return (
        <div className="articleDiv">
        <article id="zero-state"style={{fontSize:1.2+"em"}}>
            <h1 id="bigger">Doubly-Linked Lists Learning</h1>
            
            {/* Cards with additional resources to check out here */}
{/* 
            <div style={{display:'flex', justifyContent:'center'}}>
            <Link to="https://www.educative.io/answers/what-is-a-singly-linked-list">
                <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                <CardActionArea>
                    <CardMedia 
                    component="img" 
                    height="140" 
                    image={IMAGES.learning}
                    alt="Singly Linked List Learning Content" />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Singly Linked List - Educative.io                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Explore this resource to learn even more about singly linked lists!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Link>
            </div> 
            </div> */}
        </article>
        </div>
    );
}