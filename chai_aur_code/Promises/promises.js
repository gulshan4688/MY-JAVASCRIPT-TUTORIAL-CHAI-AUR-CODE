// // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// const { error } = require("console");

// // A Promise is in one of these states:

// // 1.-->pending: initial state, neither fulfilled nor rejected.
// // 2.-->fulfilled: meaning that the operation was completed successfully.
// // 3.-->rejected: meaning that the operation failed.

// // how to initialise promises
// const promise_1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise_1 is called");
//     resolve();
//   }, 1000);
// });

// promise_1.then(function () {
//   console.log("promise_1 consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise_2 is called");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promise_2 is consumed");
// });

// const promise_3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ user: "mani", email: "mani@gmail.com" });
//   }, 1000);
// });

// promise_3.then(function (user) {
//   // this user data is derived from resolve("whatever is inside it can be logged out by refering it in the .then(funcion())")
//   console.log(user);
// });

// const promise_4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "mani", password: "1234" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }

//     //above code in ternary operator
//     // let error = true; // This can be set to false to trigger the reject case
//     //   error ? resolve({ username: "mani", password: "1234" }) : reject("something went wrong");
//   }, 1000);
// });

// promise_4
//   .then((user) => {
//     console.log(user);
//     return user.username; // this then() will return username to it chained then() i.e, is next then
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// .finally(() => console.log("The promise is either resolved or rejected"));

// const promise_5 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "cpp", password: "1234" });
//     } else {
//       reject("cpp went wrong");
//     }
//   }, 2000);
// });

// async function consumedPromise_5() {
//   // async keyword is used because it returns a promise
//   try {
//     const response = await promise_5; // await keyword is used to wait till the promise is resolved
//     // and as it returns a value it gets stores in the variable later on we can print it
//     console.log(response); // here we print the promise_5 resolve value
//     console.log(response.username); // as we got the response we can print both  
//     console.log(response.password); // username and password.
//   } catch (err) {
//     console.log(err);
//   }
// }
// since we have created a async fucntion above we need to call so that it can be run
// thats why we called below 
// consumedPromise_5();    

async function getdata() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    // const data = await response.json()
    // console.log(data);
  } catch (error) {
    console.log('E:', error);
  }
}
getdata();
// the above async function is in .then and .catch method 
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => { 
//     return response.json();
//   })
//   .then((data) => {
//     // data-> jo upar se return hoga
//     console.log(data);
//   })
//   .catch((eroor) => {
//     console.log(eroor);
//   });
