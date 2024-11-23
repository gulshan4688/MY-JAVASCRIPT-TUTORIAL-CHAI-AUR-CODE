const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
}

let ctitle = document.getElementsByClassName("card-title")[0];
ctitle.style.color = "red";
let homeid = document.getElementById("hid");
homeid.style.color = "green";
homeid.textContent = "home ha re babar";

// we intensinlay made 3 divs and gave them all classes as card-selectro so now printing them on console we found
// they have been printed as Nodelist [div.card-selector, div.card-selector, div.card-selector]

let cardSelector = document.querySelectorAll(".card-selector");
console.log(cardSelector);
// if we want to change color of all of them
// then we need to select them as indexes
cardSelector[0].style.color = "purple";
cardSelector[1].style.color = "green";

// we can also select any class and in the same line we can add its styling
// for eg.
document.querySelector(".somewhere").style.color = "yellow";
document.querySelector(".somewhere").style.background = "cyan";

// here we don't use ALL i.e, .queryselectorAll
