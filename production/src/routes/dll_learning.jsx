import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import IMAGES from '../assets/images/Images';
import React from 'react';



export default function DoublyLinkedListLearning() {

    return (
        <div className="articleDiv">
        <article id="zero-state"style={{fontSize:1.2+"em"}}>
            <h1 id="bigger">Doubly-Linked Lists Learning</h1>
            <p style={{paddingBottom:50}}>
                A doubly linked list is a special type of linear list data structure with some key differences 
                as compared to a singly linked list.  
            </p>
            <p style={{paddingBottom:50}}>
                The main difference for a doubly linked list is that 
                the list can be traversed both forwards and backwards.  This is due to the three components each
                node consists of -- a pointer to the next node, a pointer to the previous node, and a section for
                data.  Therefore, traversal can happen bidirectionally within a doubly linked list.
            </p>
            <img src={IMAGES.doublyLinkedList} alt='doubly linked list diagram' style={{marginLeft:150}} />

            <ol>
                <li>The time complexity for adding a new node at the end of a doubly linked list is O(n).</li>
                <li>The head node's previous pointer points to null.</li>
                <li>In a doubly linked list, deletion of a node can happen from the front, back, or at any node between.</li>
                <li>The time complexity for inserting a new node at the front of a doubly linked list is O(1).</li>
            </ol> 
        </article>
        </div>
    );
}