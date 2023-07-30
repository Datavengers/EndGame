import Button from '@mui/material/Button';
import './trainStyles.css'
import { redirect } from 'react-router-dom';
import { useState } from 'react'

// const prompt = require("prompt-sync")({sigint:true});
// const ticketBackSize = 10;
let currentCar;


var cars = {
  "Caboose": {
      description : "Last car of the train. There are 3 people who have boarded this car since you last checked.",
      forward : "Coach Car 1",
      items : ["ticket 1", "ticket 2", "ticket 3"],
      },
  "Coach Car 1": {
      description : "It is a full car with several families.  Look for 2 new passengers and check their tickets.",
      forward : "Coach Car 2",
      items : ["ticket 4", "ticket 5"],
      },
  "Coach Car 2": {
      description : "Another full car with several families. Look for 1 new passenger and check their ticket.",
      forward : "Cafe Car",
      items : ["ticket 6"],
      },
  "Cafe Car": {
      description : "Several tables and the option for food.  Look for 2 new passengers and check their tickets.",
      forward : "Business Class Car",
      items : ["ticket 7", "ticket 8"],
      },
  "Business Class Car": {
      description : "A quiet car with several empty seats.  Look for 2 new passengers and check their tickets.",
      forward : "Front of Train",
      items : ["ticket 9", "ticket 10"],
  },
  "Front of Train": {
      items: [],
  }
};

var inventory = [];

export default function TrainGUI(){
  var [isStarted, setStarted] = useState(false);
  var [bgColor, setBgColor] = useState("black");
  var [textColor, setTextColor] = useState("lime");
  var [inputColor, setInputColor] = useState("black");
  
  // Print a main menu and the commands
  var [textToShow, setText] = useState(
    `TRAIN GAME 
        - You are the conductor on a busy train on your final walk-though.
        - Check each car and collect the remaining tickets.
        - You MUST collect the tickets whilst in the car. 
        ===========
        Commands:
        go [forward, back, etc]
        take [item name]

        Type "start" to begin
    `);

  // function moveCar(input){
  //   if (currentCar == "Front of Train"){
  //     setText("You reached the front of the train!");
  //   }
  //   else{
  //     showStatus();
  //     console.log(currentCar);
  //   }
  // }
    
      // If they type 'go' first
      // if (input[0] === "go") {
      //   // Check that they are allowed wherever they want to go
      //   if (input[1] in cars[currentCar]) {
      //       // Set the current car to the new car
      //       currentCar = cars[currentCar][move[1]];
      //   } else {
      //       textToShow="You can't go that way!";
      //   }
      // }

  function takeItem(input){
        
      // If the car contains an item and the item is the one they want to get
      const item = input.slice(1).join(" ");
      if (currentCar in cars && "items" in cars[currentCar] && cars[currentCar].items.includes(item)) {
        // Add the item to the inventory
        inventory.push(item);
        // Display a helpful message
        setText(item + " taken!");
        // Remove the item from items available in the car
        cars[currentCar].items = cars[currentCar].items.filter((ticket) => ticket !== item);
      } else if (input.includes("ticket")){ 
        setText("Hmm, which ticket?");
      }else {
        setText("Can't get " + item + "!");
      }
      setTimeout(function(){showStatus()}, 1000);
    }
  
  function checkScore(){
    var stringBuilder = "";
    // Display the final inventory
    if (inventory.length == 10) {
        stringBuilder += 
        `YOU WIN!!!
        You have collected all of the tickets!
        YOU WIN!`;
    }
    else
    {
      stringBuilder += 
      `Whilst you have reached the front of the train, you did not collect all of the tickets.
      You lose this round.`;
    }
    stringBuilder += `
    Play again? (y / n)`;

    setText(stringBuilder);
  }
  

function showStatus() {  
  // Print the player's current status
    if (currentCar != "Front of Train"){
      let stringBuilder = `------------------------  
              You are in the ` + currentCar +".";

      // Print the description of the current car
      if (currentCar in cars && "description" in cars[currentCar]) {
        stringBuilder += `
          Car description: ` + cars[currentCar].description;
        }

      // Print the available tickets in the current car
      if (currentCar in cars && "items" in cars[currentCar]) {
          stringBuilder += `
          Available Tickets: ` + cars[currentCar].items.join(", ");
        }
      // Print the current inventory
      stringBuilder += `
      Inventory: ` + inventory.join(", ") + `
      ------------------------`;
      setText(stringBuilder);
    }
    else{
      setText( "You've reached the front of the train!");
      setTimeout(function(){checkScore()}, 1000);
    }
}

function HandleInput(e){
  e.preventDefault();
  let userInput = document.getElementById("userInput").value.toLowerCase().split(" ");

  switch(userInput[0]){
    case "start":
      if(!isStarted){
        setStarted(true);
        // setCar(cars[currentCar]["forward"]); //req'd to fix some weird latency
        currentCar = "Caboose";
        showStatus();
      }
      break;
    case "go":
    case "move":
      if (isStarted){
        if(userInput[1] == "forward" && currentCar != "Front of Train"){
          // setCar(cars[currentCar]["forward"]);
          currentCar = (cars[currentCar]["forward"]);
          showStatus();
        }
        else{
            setText(`You can't go that way...
            This is a singly-linked train, you can only go forward!`);
            setTimeout(function(){showStatus()}, 2000);
        }
      }
      break;
    case "get":
    case "collect":
    case "take":
      if(isStarted){
        if (userInput.includes("ticket")){
          takeItem(userInput);
        }
        else{
          setText("I can't seem to find that, hmm... ")
          setTimeout(function(){showStatus()}, 1500);
        }
      }
      break;
    case "jump":
      if(isStarted){
        setText(`You jumped. Everybody is looking at you. 
        That was a rather silly thing for a conductor to do, wasn't it?`);
        setTimeout(function(){showStatus()}, 4000);
      }
      break;
    case "y":
    case "yes":
      if (currentCar == "Front of Train"){
        location.reload();
      }
      break;
    case "n":
    case "no":
      if (currentCar == "Front of Train"){
        window.open("/singly-linked-lists", "_self");
      }
      break;
    default:
      if (isStarted){
        setText("I don't recognize that command.");
        setTimeout(function(){showStatus()},1000);
      }
    }
    document.getElementById("userInput").value = "";
  }

  function setGUIStyle(){
    switch (textColor){
      case("lime"):
        setBgColor("blue");
        setTextColor("white");
        setInputColor("blue");
        break;
      case("white"):
        setBgColor("black");
        setTextColor("orange");
        setInputColor("black");
        break;
      case("orange"):
        setBgColor("black");
        setTextColor("lime");
        setInputColor("black");
        break;
    }

  }

  document.body.style.overflow = "hidden";
    
  return(
    <>
        <div id="computerBezel">
          <div id="computerScreen" style={{backgroundColor: bgColor}}>
            <div id="textArea">
              <p id="trainText" style={{color:textColor}}>{textToShow}</p>
            </div>
            <div id="inputArea">
              <form autoComplete="off" onSubmit={HandleInput}>
                <input id="userInput" type="text" onBlur={({target })=>target.focus()} autoFocus={true} style = {{backgroundColor: inputColor, color: textColor}}/>
              </form>
            </div>
          </div>
          <div id="btnDiv">
              <button id="colorButton" onClick={()=>{setGUIStyle()}} style={{color:textColor}}>O</button>
            <p id="logo" style={{fontFamily:'fantasy', userSelect:'none'}}>TrainGame</p>
        </div>
        </div>
        <div id="computerBase"></div>
    </>
  )
}
