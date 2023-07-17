
const ui = require("./Train1UI");
const definitions = require("./Train1Define");

const ticketBagSize = 10;

var train;
var bag;
var car;

startGame();

function enter()
{
    ui.createUI();
    startGame();
}

function startGame()
{
    ui.clear();

    train = definitions.getTrain();
    bag = [];

    handleHelp();
    enterCar("Caboose");
}

function keyPressed()
{
    ui.checkCommand(keyCode, handleInput);
}

function handleInput(s)
{
    if (!s) {
        return;
    }

    var ar = s.split(" ");
    if (ar.length == 0) {
        return;
    }

    ui.println("> " + s);

    var cmd = ar[0].toLowerCase();
    ar.shift();

    switch(cmd)
    {
        case "new":
            startGame();
            break;
        case "help":
            handleHelp();
            break;
        case "look":
            handleLook();
            break;
        case "go":
            handleGo(ar);
            break;
        case "take":
            handleTake(ar);
            break;
        case "bag":
            handleBag();
            break;
    }
}

function handleHelp()
{
    ui.println("Welcome to TRAIN GAME!\n");
    ui.println("It is a very busy day on the train and you are on your last pass-through.");
    ui.println("Be sure to collect any remaining tickets as you go.  YOU CAN NOT GO BACK.");
    ui.println("Available commands: \n");
    ui.println("new                 - Start a new game");
    ui.println("help                - Display this help information");
    ui.println("look                - Look in the car");
    ui.println("go direction        - Go in the specified direction. Read car descriptions.");
    ui.println("take object         - Take specified object from car");
    ui.println("bag                 - Show contents of bag");

    ui.println(" ");
}

function handleGo(ar)
{
    if (ar.length === 0)
    {
        ui.println("Specify the direction you want to go!");
        return;
    }

    go(capitalize(ar[0]));
}

function handleLook()
{
    printCar(car);
}

function handleTake(ar)
{
    if (ar.length === 0)
    {
        ui.println("Specify an object to take!");
        return;
    }

    var what = ar.join(" ");

    var p = car.Objects ? car.Objects.indexOf(what) : -1;

    if (p < 0)
    {
        ui.println("Cannot find '" + what + "'.");
        return;
    }

    var object = car.Objects[p];
    bag.push(object);
    car.Objects.splice(p, 1);

    ui.println("You took '" + object + "'.");
}

function handleBag()
{
    if (bag.length === 0) 
    {
        ui.println("You don't have any tickets in the bag");
        return;
    }

    ui.println("You have: " + bag.join(', '));
}

function go(direction)
{
    var newCar = car[direction];
    if (!newCar)
    {
        ui.println("Cannot go " + direction);
        return;
    }

    enterCar(newCar);
}

function enterCar(carName)
{
    var c = findCar(carName);
    if (!c)
    {
        ui.println("Cannot find car " + carName);
        return;
    }

    car = c;
    printCar(car);
    checkCar(car);
}

function checkCar(car)
{
    if (car == "Front of Train" && bag.length == 10)
    {
        ui.println("You win!  You made it to the front of the train and collected all the tickets!");
        ui.println("Type 'new' to begin a new game.");
        return;
    }

    else if (car == "Front of Train" && bag.length != 10)
    {
        ui.println("You did not collect all of the tickets. You lose this round. ");
        ui.println("Type 'new' to begin a new game.");
        return;
    }
}

function printCar(car)
{
    ui.println("You are in " + car.Name);

    if (car.Description) {
        ui.println(car.Description);
    }
    printObjects(car);
    ui.println("");
}

function printObjects(car)
{
    if (!car.Objects || car.Objects.length === 0)
    {
        return;
    }

    var txt = "In this car you see: " + car.Objects.join(", ");
    ui.println(txt);
}

function exitCar(carName)
{

}

function findCar(carName) 
{
    for(var c of train.cars)
    {
        if (c.Name === carName)
        {
            return c;
        }  
    }
    return null;
}

function capitalize(s)
{
    if (!s || s.length ===0)
    {
        return s;
    }
    return s[0].toUpperCase() + s.substr(1).toLowerCase();
}
