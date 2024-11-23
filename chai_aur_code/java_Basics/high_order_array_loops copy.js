// learn to iterate array of higher order

// for of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // here num is just an iterator
  // console.log(num);
}
const greetings = "hello greetings";
for (const greet of greetings) {
  // here greet is just an iterator
//   console.log(`each char of greetings is ${greet}`);
}

// map
const map = new Map();
map.set("IN", "91");
map.set("USA", "60");
map.set("PK", "89");
// console.log(map);
// printing whole map once 
for(const key of map){
    // console.log(key);
}

// printing key and value sepately
for(const [key,value] of map){
    // console.log(key,'-',value);
}
// +++ IMP note  that objects can not be iterated in this way (gives an error)

// now another method to iterate on objecst
// for in loop 
const myobject={
    cpp:"c++",
    js:"javascript",
    rb:"ruby",
    swift:"swift"
}
for(const key in myobject){      // the differnece is in "of" and "in"
    // console.log(`${key} has a value of ${myobject[key]}`);
}

// for each loop 
const arr1 = [1, 2, 3, 4, 5,6];
arr1.forEach((item) => {
    // console.log(item);
});

// variatioin of above for each loop 
arr1.forEach(function(item){
    // console.log(item);
})

// start a function of name printMe 
function printMe(item){  // give item as mention in for each loop as parameter
    // console.log(item);      // aur yaha pe jo bhi para meter aayega wo print ho jayega
}

// arr1.forEach(printMe)

arr1.forEach((item ,index,arr1)=>{
    // console.log(item,index,arr1);
})


const mycoding=[
    {
        programname:"javascript",
        filename:"js"
    },
    {
        programname:"javascript",
        filename:"js"
    },
    {
        programname:"javascript",
        filename:"js"
    }
]

mycoding.forEach((item)=>{
    {}
    console.log(item.filename);    // item dot krke jo bhi object mei se print krna hai wo kr skte hai  

})