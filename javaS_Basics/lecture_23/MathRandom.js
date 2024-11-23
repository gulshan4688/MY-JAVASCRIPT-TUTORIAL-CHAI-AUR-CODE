const prompt=require("prompt-sync")({sigint:true});
const x = Math.floor(Math.random() * 10 + 1);

let usernumber = prompt("guess the number btw 1 to 10\n");
// let score = 100;
let turns = 0;
while (usernumber != x) {
  if(usernumber < x) {
   usernumber=prompt("number is low try again\n");
  } else {
    usernumber=prompt("number is high try again\n");
  }
  turns++;
}
const score = 10 - turns;
console.log(`your score was ${score}.`);

// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let userGuess = prompt("Guess the number between 1 and 100");
// let turns = 0;
// while (userGuess != randomNumber) {
//   if (userGuess < randomNumber) {
//     userGuess = prompt("Your guess was too low. Try again.");
//   } else {
//     userGuess = prompt("Your guess was too high. Try again.");
//   }
//   turns++;
// }
// const score = 100 - turns;
// console.log(`Congratulations! You guessed the number in ${turns} turns! Your score is ${score}.`);