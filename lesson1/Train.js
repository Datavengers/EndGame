const prompt = require("prompt-sync")({sigint:true});
const ticketBackSize = 10;

function showInstructions()
{
    // Print a main menu and the commands
    console.log(`
        TRAIN GAME 
        ===========
        Commands:
        go [direction]
        take [item]
    `);
}

function showStatus() {
    // Print the player's current status
    console.log("------------------------");
    console.log("You are in the " + currentCar + ".");

    // Print the description of the current car
    if (currentCar in cars && "description" in cars[currentCar]) {
        console.log("Car description: " + cars[currentCar].description);
      }

    // Print the available tickets in the current car
    if (currentCar in cars && "items" in cars[currentCar]) {
        console.log("Available Tickets: " + cars[currentCar].items.join(", "));
      }
    // Print the current inventory
    console.log("Inventory: " + inventory.join(", "));
    console.log("------------------------");
}

var inventory = [];

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


var currentCar = "Caboose";

showInstructions();

// Loop until reaching the front of the train
while (currentCar !== "Front of Train") {
  showStatus();

  // Get the player's next move
  var move = prompt("> ");
  move = move.toLowerCase().split(" ");

  // If they type 'go' first
  if (move[0] === "go") {
    // Check that they are allowed wherever they want to go
    if (move[1] in cars[currentCar]) {
        // Set the current car to the new car
        currentCar = cars[currentCar][move[1]];
      } else {
        console.log("You can't go that way!");
      }
    }

  // If they type 'take' first
  if (move[0] === "take") {
    // If the car contains an item and the item is the one they want to get
    const item = move.slice(1).join(" ");
    if (currentCar in cars && "items" in cars[currentCar] && cars[currentCar].items.includes(item)) {
      // Add the item to the inventory
      inventory.push(item);
      // Display a helpful message
      console.log(item + " taken!");
      // Delete the item from the car
      cars[currentCar].items = cars[currentCar].items.filter((ticket) => ticket !== item);
    } else {
      console.log("Can't get " + item + "!");
    }
  }
}

console.log("You have reached the front of the train");

// Display the final inventory

if (inventory.length == 10) {
    console.log("You have collected all of the tickets! YOU WIN!\n");
    return;
}
else
{
    console.log("Whilst you have reached the front of the train, you did not collect all of the tickets.  \nYou lose this round.\n\n");
    return;
}
