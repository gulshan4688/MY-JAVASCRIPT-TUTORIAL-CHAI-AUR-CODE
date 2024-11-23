// so here we stutied about promises
// promises has two parts
// resolve and reject
// when a promise is resolved then we use .then() and return anything we want
// but when we use .catch() then this means we have an error and we return that error with .catch()
// using .catch() only return a statement without showing any red block error

let p1 = new Promise((resolve, reject) => {
  console.log("resolving p1 is pending ");
  setTimeout(() => {
    // we do not clg here insted this we use .then()
    // console.log("promise p1 is resolved");
    resolve(true); // this a value that if it is fulfilled then return true in value as we used in p1.then((value))

    // reject(new Error("I am an error"));
  }, 2000);
});


let p2 = new Promise((resolve, reject) => {
  console.log("resolving p2 is pending ");
  setTimeout(() => {
    // we do not clg here insted this we use .catch() fayeda==> console mei red eror nhi ata hai simply print ho jata hai
    // console.log("promise p2 is rejected");
    // resolve(true);
    reject(new Error("I am an error"));
  }, 5000);
});

// console.log(p1, p2);

// To get the value when promised gets fulfilled
p1.then((value) => {
  console.log("this is p2.then statement");
});

// To get the value when promised gets rejected
p2.catch((Error) => {
  console.log("some error occured in p2");
});
