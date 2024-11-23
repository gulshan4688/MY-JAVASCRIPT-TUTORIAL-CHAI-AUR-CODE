// we can get any class attribute with the help of its id attribute
// let a = first.getAttribute("class");
// it is bad pratice
// good practice is
let a = document.getElementById("first");
// id                //which type of attrubute do u want
console.log(a); // print in console in browser

// to check wether a attrbute is present in a tag or not

console.log(a.hasAttribute("class")); // will give true bcoz class is prsnt
console.log(a.hasAttribute("style")); // but it will give false as no style attribute is present in this tag

// this attribute is used to hide any atttibute for a any id
// we can observe that all attributes are acceseed by  id only
a.setAttribute("hidden", "true");
// we can set new class also using setAttribute property
a.setAttribute("class", "newclass");
console.log(a);

// now we have remove attribute that will remove any attribute like class,src or style
// a.removeAttribute("class");
console.log(a);
console.log(a.attributes);

// we can create our own attributes but only they can start with "data-"
// for eg, data-game or data-player

console.log(a.dataset);
//print class name of data set one by one
console.log(a.dataset.game);
console.log(a.dataset.player);
