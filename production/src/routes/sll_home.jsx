import React, {useEffect, useState} from 'react';
import {SLL_GFG_Card, SLL_Train_card, SLL_educatio_Card, SLL_learning_card, SLL_quiz1 } from '../cards/sll_cards';

export default function Sll_Home() {
  const [user,setUser] = useState('');
  const [loaded,setLoaded] = useState(false);
  const ARTICLE_POINT_VALUE = 3;


  const fetchUserData = async () => {
      try {
        const response = await fetch("/data-vengers/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });

        if (response.status === 200) {
          const data = await response.json();
          setUser(data);
          setLoaded(true);
        } else {
          console.error('Error fetching user data');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    useEffect(() => {
      fetchUserData();
    }, []);
  async function updatePoints() {
      
    const response = await fetch(`/data-vengers/api/gainPoints`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', //sends as JSON
      },
      //payload
      body: JSON.stringify({ 
        email:user.email,
        pointValue:ARTICLE_POINT_VALUE,
      }),
    })
  
    try{
        const data = await response.json()
        console.log(data)
    } catch {
      console.log("error from the dll_cards page");
        return;
    }
  }
    return (
    <div className="articleDiv">
      <article id="zero-state"style={{fontSize:1.2+"em"}}>
        <h1 id="bigger">Singly-Linked Lists</h1>
          <p id="zero-state" style={{fontSize:1.1+"em", margin:25}}>
            Singly-linked lists... the base of so many other data structures.
            Become a superhero in singly-linked lists first, and then you can
            comfortably check out other structures like doubly-linked lists
            and graphs.
            Read up on what singly-linked lists (and other structure) are all about.
            Test your memory with a quiz, or practice your skills with a game - 
            no matter what you do, you're building those superhero muscles!
            
          </p>
          <div style={{display:'flex', flexFlow:'row wrap',justifyContent:'center'}}>
          <div onClick={updatePoints}><SLL_learning_card/></div>
            <SLL_Train_card/>
            <SLL_quiz1/>
            <div onClick={updatePoints}><SLL_educatio_Card/></div>
            <div onClick={updatePoints}><SLL_GFG_Card /></div>
          </div>
      </article>
    </div>
    );
  }