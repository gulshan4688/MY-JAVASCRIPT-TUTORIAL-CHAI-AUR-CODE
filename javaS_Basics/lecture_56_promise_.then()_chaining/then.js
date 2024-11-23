let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("request resolved after 2 secs");
    resolve(56);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    resolve("promise p2");
  });
  return p2;
})
  .then((value) => {
    console.log("we are done");
  })
  .then(() => {
    setTimeout(() => {
      console.log("second timer");
    }, 2000);
    console.log("again we are done");
  });
