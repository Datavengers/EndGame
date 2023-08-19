import React, {useState, useEffect} from 'react';
import { DLL_GFG_Card, DLL_Train_card, DLL_javatpoint_Card, DLL_learning_card, DLL_quiz1 } from '../cards/dll_cards';

export default function Dll_Home() {
  const [user,setUser] = useState('');
  const [loaded,setLoaded] = useState(false);
  const ARTICLE_POINT_VALUE = 3;
  
  const API_URL = '/data-vengers';
  // const API_URL = 'http://localhost:8125'; // Your backend server URL

  const fetchUserData = async () => {
      try {

        const response = await fetch(`${API_URL}/api/user`, {


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
      

    const response = await fetch(`${API_URL}/api/gainPoints`, {

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
        <h1 id="bigger">Doubly-Linked Lists</h1>
          <p id="zero-state" style={{fontSize:1.1+"em", margin:25}}>
            Doubly-linked lists... almost identical to a singly linked list
            with one HUGE difference!  By this point, you should be a super-hero 
            at singly linked lists, so peruse the doubly linked list content, game, 
            and quiz to learn all about the key differences between the two types of 
            linked lists and what makes Doubly-linked lists -- DOUBLY.
          </p>
          <div style={{display:'flex', flexFlow:'row wrap',justifyContent:'center'}}>
            <div onClick={updatePoints}><DLL_learning_card/></div>
            <DLL_Train_card/>
            <DLL_quiz1/>
            <div onClick={updatePoints}><DLL_GFG_Card/></div>
            <div onClick={updatePoints}><DLL_javatpoint_Card /></div>
          </div>
          
      </article>
    </div>
    
    );
  }