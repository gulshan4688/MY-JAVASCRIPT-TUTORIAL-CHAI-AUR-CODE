const objectInspect = require("object-inspect");
const { stringify } = require("querystring");

let myHero =["man1","man2","man3"]

// we create an object 
let heroPower={
    man1:"hammer",
    man2:"web",
    getMan2:function(){
        console.log(`man2 power is ${this.man2}`);
    }
}

heroPower.getMan2();

Object.prototype.mani=function(){
    console.log(`mani is present in all objects`);
}
heroPower.mani() // this prototype we created ourselves so now we can use this property any where
myHero.mani() // like any where we meant anywhere 

                //++++++++++++ Hierarchy of prototype +++++++++++
// When we are creating up to type related to the object that is in the highest hierarchy then it can be used with any lower hierarchy data types like arrays strings but when we create any prototype with arrays or string it cannot be used with object as it is in lower hierarchy


// +++++++++++++ create your own prototype ++++++++++++++++++++++++++

let anotherUserName="maniPixels              "
  
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`the true length of the string is ${this.trim().length}`);
    ds
}

anotherUserName.trueLength();