//   SET TIMEOUT
// THIS IS USED FOR PUTTING A DELAY IN THE EXEXUTION OF CODE
// AND IT SYNTAX IS
// ----->>>   let any_var=setTimeout(func_name ,delay_in_microSeconds, arg1,arg2);

// now if we talk about the setInterval than it has a same syntx but runs the program after every given
// interval     syntax--------->>let any_var=setInterval(func_name ,delay_in_microSeconds, arg1,arg2);

// this is normal alert as soon as browser refreshes it appear
document.write("\nhello------g");

// but this is delayed alert mesage as it id fitted into a timer called setTimeout and written in fucn

// 1.=== first way of writting code
// setTimeout(function () {
//   alert("code executed");
// }, 2000);

// 2.=== second way of writting code
// let a = setTimeout(function () {
//   alert("code executed");
// }, 2000);

//also we can cancel this timer or clear timeout
// clearTimeout(a);
/// now this timer is off
//   we can print a
// console.log(a);

// we can also put this in condition
// let b = prompt("do u want to run the settimeout yes or no");
// if ("n" == b) {
//   clearTimeout(a);
// }
// console.log(a);

// const sum = (a, b) => {
//   console.log("yes!  I am running " + (a + b));
//   a + b;
// };

// setTimeout(sum, 3000, 1, 2);

//example of setInterval

let a=setInterval(function () {
  alert("Time interval is runnig after every 2 seconds");
}, 2000);

// doing this setInterval with arguments

const diff=(a,b)=>{
    alert("self defence"+(a-b));
    a-b;
}

setInterval(diff,3000,7,1);

// with the help of clearInterval(c) we can stop the execution
