// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const { error } = require("console");

// A Promise is in one of these states:

// 1.-->pending: initial state, neither fulfilled nor rejected.
// 2.-->fulfilled: meaning that the operation was completed successfully.
// 3.-->rejected: meaning that the operation failed.

// how to initialise promises
const promise_1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("promise_1 is called");
    resolve();
  }, 1000);
});

promise_1.then(function () {
  console.log("promise_1 consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("promise_2 is called");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise_2 is consumed");
});

const promise_3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ user: "mani", email: "mani@gmail.com" });
  }, 1000);
});

promise_3.then(function (user) {
  // this user data is derived from resolve("whatever is inside it can be logged out by refering it in the .then(funcion())")
  console.log(user);
});

const promise_4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "mani", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }

    //above code in ternary operator
    // let error = true; // This can be set to false to trigger the reject case
    //   error ? resolve({ username: "mani", password: "1234" }) : reject("something went wrong");
  }, 1000);
});

promise_4
  .then((user) => {
    console.log(user);
    return user.username; // this then() will return username to it chained then() i.e, is next then
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
.finally(() => console.log("The promise is either resolved or rejected"));
