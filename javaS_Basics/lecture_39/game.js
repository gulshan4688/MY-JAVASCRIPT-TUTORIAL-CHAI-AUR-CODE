// let userInput = prompt("Please enter something:", "Default value");

// var prompt = require("prompt-sync")();

let user = prompt("enter S W or G to continue snake water gun\n");
let cpuI = Math.floor(Math.random() * 3);
// console.log(cpu);
let cpu = ["s", "W", "G"][cpuI];

const match = (cpu, user) => {
  if (cpu == user) {
    return "No-body";
  } else if (cpu == "S" && user == "W") {
    return "cpu";
  } else if (cpu == "S" && user == "G") {
    return "user";
  } else if (cpu == "G" && user == "S") {
    return "cpu";
  } else if (cpu == "G" && user == "W") {
    return "user";
  } else if (cpu == "W" && user == "G") {
    return "cpu";
  } else if (cpu == "W" && user == "S") {
    return "user";
  }
};
let result = match(cpu, user);
document.write("and the winner is:" + result);
