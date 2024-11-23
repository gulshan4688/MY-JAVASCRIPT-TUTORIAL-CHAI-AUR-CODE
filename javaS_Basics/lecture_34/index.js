function change()
{
  document.body.firstElementChild.style.background = "red";
}

let b = document.body;
console.log("first child of the body", b.firstChild);
console.log("first Element child of the body", b.firstElementChild);
