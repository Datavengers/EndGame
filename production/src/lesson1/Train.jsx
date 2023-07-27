import Button from '@mui/material/Button';
import './trainStyles.css'
import { redirect } from 'react-router-dom';
import { useState } from 'react'

// const prompt = require("prompt-sync")({sigint:true});
// const ticketBackSize = 10;
// var currentCar = "Caboose";


var cars = {
  "Caboose": {
      description : "Last car of the train. There are 3 people who have boarded this car since you last checked.",
      forward : "Coach Car 1",
      items : ["ticket 1", "ticket 2", "ticket 3"],
      },
  "Coach Car 1": {
      description : "It is a full car with several families.  Look for 2 new passangers and check their tickets.",
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

  // choice = "";
  const [currentCar, setCar] = useState("Caboose");
  
  // Print a main menu and the commands
  var [textToShow, setText] = useState(
    `TRAIN GAME 
        - You are the conductor on a busy train on your final walk-though.
        - Check each car and collect the remaining tickets.
        - You MUST collect the tickets whilst in the car. 
        ===========
        Commands:
        start
        go [direction]
        take [item]
    `);


  // // Loop until reaching the front of the train
  // // while (currentCar != "Front of Train") {
  //   ShowStatus();

  //   // while(currentCar !== "Front of Train"){
  //   if()  
  //   console.log(choice);
  //     setCar("Coach Car 1");
  //     console.log(currentCar);
    
    
  //   if(choice == "start"){
  //     // Get the player's next move
  //     var move = choice.toLowerCase().split(" ");

  //     // If they type 'go' first
  //     if (move[0] === "go") {
  //       // Check that they are allowed wherever they want to go
  //       if (move[1] in cars[currentCar]) {
  //           // Set the current car to the new car
  //           currentCar = cars[currentCar][move[1]];
  //       } else {
  //           textToShow="You can't go that way!";
  //       }
  //     }
        
  //     // If they type 'take' first
  //     if (move[0] === "take") {
  //       // If the car contains an item and the item is the one they want to get
  //       const item = move.slice(1).join(" ");
  //       if (currentCar in cars && "items" in cars[currentCar] && cars[currentCar].items.includes(item)) {
  //         // Add the item to the inventory
  //         inventory.push(item);
  //         // Display a helpful message
  //         textToShow = item + " taken!";
  //         // Remove the item from items available in the car
  //         cars[currentCar].items = cars[currentCar].items.filter((ticket) => ticket !== item);
  //       } else {
  //         textToShow = "Can't get " + item + "!";
  //       }
  //     }
  //   }
  // }
  
  // if(currentCar == "Front of Train"){
  //   textToShow = `------------------------
  //           You have reached the front of the train`;
  //   // Display the final inventory
  //   if (inventory.length == 10) {
  //       textToShow=
  //       `YOU WIN!!!
  //       You have collected all of the tickets!
  //       YOU WIN!`;
  //   }
  //   else
  //   {
  //       textToShow=
  //       `Whilst you have reached the front of the train, you did not collect all of the tickets.
  //       You lose this round.`;
  //   }
  //   textToShow += `
  //   Play again? (y / n)`;
  // }

  //   if(choice.toLowerCase().startsWith('y')){
  //     location.reload();
  //   }
  //   else{
  //     redirect('/singly-linked-lists');
  //   }

function showStatus() {  
  // Print the player's current status
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

function HandleInput(e){
  e.preventDefault();
  let userInput = document.getElementById("userInput").value;

  switch(userInput){
    case "start":
      setText("You submitted start");
      break;
    case "go":
      // setText("You submitted go");
      showStatus();
      break;
    case "take":
      setText("You submitted take");
      break;
    default:
      setText("This is not the command you're looking for.");
  }
}
    
    return(
      <>
        <div id="computerBezel">
          <div id="computerScreen">
            <div id="textArea">
              <p id="trainText">{textToShow}</p>
            </div>
            <div id="inputArea">
              <form autoComplete="off" onSubmit={HandleInput}>
                <input id="userInput" type="text" onBlur={({target })=>target.focus()} autoFocus={true}/>
              </form>
            </div>
          </div>
          <div id="btnDiv">
              <button id="offButton" />
            <p id="logo" style={{fontFamily:'fantasy', userSelect:'none'}}>TrainGame</p>
        </div>
        </div>
        <div id="computerBase"></div>
      </>
    )
  }
