import React, {useState, useEffect} from 'react';
import { DLL_GFG_Card, DLL_Train_card, DLL_javatpoint_Card, DLL_learning_card, DLL_quiz1 } from '../cards/dll_cards';

export default function Dll_Home() {
  const [user,setUser] = useState('');
  const [loaded,setLoaded] = useState(false);
  const ARTICLE_POINT_VALUE = 3;

  const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user", {
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
      
    const response = await fetch(`http://localhost:3000/api/gainPoints`, {
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
          <div style={{display:'flex', justifyContent:'center'}}>
          <Link to="/doubly-linked-lists/dll-learning">
            <Card sx={{margin: 2.5, width: 300, height:275, backgroundColor:'rgba(255,255,255,0.6)' }}>
              <CardActionArea>
                <CardMedia 
                component="img" 
                height="140" 
                image={IMAGES.learning}
                alt="Double Linked List Learning Content" />
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