document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// document.getElementsByName("li")[0].style.background="red";
Array.from(document.getElementsByTagName("li")).forEach((Element)=>{
    Element.style.background="red";
})
