
// below x and y are two function refrences to print diffrent values 

let x = function (e) {
  alert("hello world___1");
};

let y = function (e) {
  alert("hello world___2");
};
// click on btn and it wil print x funcion
btn.addEventListener("click", x);

// click on btn and it wil print x funcion
btn.addEventListener("click", y);

let a = prompt("what is your fav no.");

if (a == "2") {
  btn.removeEventListener("click", x);
}
