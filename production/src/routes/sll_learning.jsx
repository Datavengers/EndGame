import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import IMAGES from '../assets/images/Images';
import { AlignHorizontalCenter, FormatAlignJustify } from '@mui/icons-material';
import React from 'react';

export default function SinglyLinkedListLearning() {

    return (
        <div className="articleDiv">
        <article id="zero-state"style={{fontSize:1.2+"em"}}>
            <h1 id="bigger">Singly-Linked Lists</h1>
            <p id="zero-state" style={{fontSize:1+"em", margin:25}}>
                A unidirectional list linked by nodes in which it can only be traversed from head to tail 
                (i.e., the last node in the list) in only one direction.  To expand, a node is just an element
                in a linked list.  
            </p>
            <img src={IMAGES.linkedList} alt='linked list diagram' style={{marginLeft:150}} />
            <p id='zero-state' style={{fontSize:1+"em", margin:25}}>
                As shown in the diagram above, a single node contains two things - data and a pointer to the next
                node.  The next node pointer helps to maintain the overall structure and characteristics that a 
                singly linked list encompass.  Furthermore, the "head" is the name of the first element in the list
                and conversely the last element in the list is known as the tail.  
            </p>
            <div>
            <h4>Additional Facts</h4>
            <ol>
                <li>For retreiving a node anywhere in a singly linked list, the worst case time complexity is O(n)</li>
                <li>The last node in a singly linked list can be identified due to the pointer to the next node pointing at null</li>
                <li>A linked list is a basis for several other data structures such as stacks and queues</li>
            </ol>
            {/* Cards with additional resources to check out here */}

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
            <Link to="https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/">
                <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
                <CardActionArea>
                    <CardMedia 
                    component="img" 
                    height="140" 
                    image={IMAGES.learning}
                    alt="Singly Linked List Learning Content" />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Singly Linked List - GeeksForGeeks                  </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Additional resource to learn more about singly linked lists!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Link>
            </div>
            </div>
        </article>
        </div>
    );
}