// Todo : Project Idea
//! 01 => User input : Guess Number 1 to 5
//! 02 => Generate a Random between 1 to 5
//! 03 => If the guess number matches: Show message won, else lost
//! 04 => Run the game for 05 times
//! 05 => Show the number of won and lost



let won = document.getElementById("won");
let lost = document.getElementById("lost");

let output = document.getElementById("output");

let numberOfWon = 0;
let numberOfLost = 0;



const originalConsoleLog = console.log;
console.log = function(message) {
    originalConsoleLog(message);
    output.innerHTML += message + "<br>";
};

for (let i = 1; i <= 5; i++) {


    let guessNumber = parseInt(prompt("Enter a number between 1 to 5: \n (For 05 Times)"));
    let rendomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber === rendomNumber) {
        console.log("You Are Won!");
        numberOfWon++;

    } else {
        console.log(`You are Lost. Random number is: ${rendomNumber}`);
        numberOfLost++;
    }
}


won.textContent = `Total Won : ${numberOfWon}`;
lost.textContent = `Total Lost : ${numberOfLost}`;
