// we can fetch any query lie id or class and store in any variable like here we have did it with mydiv

const { forEach } = require("async");
const { lookup } = require("dns");

let mydiv = document.querySelector("#mydiv");      // this my div is parent 
// now create an element which we have to edit like span (its an element here)
let newElement = document.createElement("span"); // this  newElement is child
// now we are adding content to it 
newElement.textContent = "mani nupur";
// this will appera liek <span> mani nupur </span>

// and now command of where to insert mydiv which we created initially 
       mydiv.insertAdjacentElement("afterbegin", newElement);
//     parent.inserAdjacetElement("psotion", child)
let parent = document.querySelector("#mydiv");
let child = document.querySelector("#fpara");
parent.removeChild(child);



// there are selectors used in js to select the tag and manipulate them according to the our changes


// 1.document.getElementsByTagName()
// 2.document.getElementsByClassName()
// 3.document.getElementById()
// 5.document.querySelectorAll()

// 4.document.querySelector()
//                           in query selector we can select any tag and tag ke andar ka tag like 
//                           document.querySelector('p:first-child) and all stuffs 

//                            if we say that give a ul or ol than its provide in in array like structure
// like [li,li,li] and then we can use forEach loop on this array like structure
// they are not exactly array thats why we cannot use every single method on them and we can use only that
 // methods which are specified in their prototype
//  for eg forEach is specified in the prototype

const tempList=document.querySelector('li');

// this is just an example agar hum kisi tag ko bhi select karenge to wo to sare tags ko select krke 
//  list ke form mei de deta hai like this below

// then it will give tempList=[li,li,li...jitne bhi ho ...]
// so now we use forEach loop
tempList.forEach(function(l){
    l.style.color='green';
})


// if any method is not working on any datatype
// than we can convert it to array 
Array.from(tempList); 
// u can also store it in any variable
const myarray=Array.from(tempList); // now foreach will be available 

