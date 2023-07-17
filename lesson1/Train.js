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
    console.log("You are in the " + currentCar + " car.");
    // Print the current inventory
    console.log("Inventory: " + inventory.join(", "));
    console.log("------------------------");
}

var inventory = [];

var cars = {
    Caboose: {
        Description : "Last car of the train. There are 3 people who have boarded the train in this car since you last checked.",
        forward : "Coach Car 1",
        items : ["ticket 1", "ticket 2", "ticket 3"]
        },
    CoachCar1: {
        Description : "It is a full car with several families.  Look for 2 new passangers and check their tickets.",
        forward : "Coach Car 2",
        items : ["ticket 4", "ticket 5"]
        },
    CoachCar2: {
        Description : "Another full car with several families. Look for 1 new passenger and check their ticket.",
        forward : "Cafe Car",
        items : ["ticket 6"]
        },
    CafeCar: {
        Description : "Several tables and the option for food.  Look for 2 new passengers and check their tickets.",
        forward : "Business Class Car",
        items : ["ticket 7, ticket 8"]
        },
    BusinessClassCar: {
        Description : "A quiet car with several empty seats.  Look for 2 new passengers and check their tickets.",
        forward : "Front of Train",
        items : ["ticket 9", "ticket 10"]
    },
};

var currentCar = "Caboose";

showInstructions();

// Loop forever
while (true) {
    showStatus();

    // Get the player's next move
    var move = prompt(">");
    move = move.toLowerCase().split(" ");

    // If they type 'go' first
    if (move[0] === "go") {
        // Check that they are allowed wherever they want to go
        if (move[1] in cars[currentCar]) {
            // Set the current car to the new car
            currentCar = cars[currentCar][move[1]];
        }
        else {
            console.log("You can't go that way!");
        }
    }

    // If they type 'get' first
    if (move[0] === "get") {
        // If the car contains an item and the item in the one they want to get
        for (item in "items" ) {
            if (
                "item" in cars[currentCar] &&
                move[1] === cars[currentCar]["item"]
            ) {
                // Add the item to the inventory
                inventory.push(move[1]);
                // Display a helpful message
                console.log(move[1] + " got!");
                // Delete the item from the car
                delete cars[currentCar]["item"];
            }
            else {
                console.log("Can't get " + move[1] + "!");
            }
        }
    }




}

