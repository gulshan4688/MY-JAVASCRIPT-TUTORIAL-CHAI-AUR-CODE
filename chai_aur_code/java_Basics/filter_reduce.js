const coding = ["js", "cpp", "ruby", "java", "swift"];

const arr1 = [1, 2, 3, 4, 5,6];

const value=coding.forEach((item)=>{
    // console.log(item[0],item[1]);
})
console.log(value); 


// filter method in for loop 
const nums=arr1.filter((num)=> num>3)    // jo print krna hai ((item ) => condition )
console.log(nums);

const array=arr1.map((num)=>num+10)
console.log(array);
//+++++++OR++++++
const array1=arr1.map((num)=>{return num+20})
console.log(array1);



// we can apply multiple filter or map also called chaining
const array2=arr1.map((num)=>{return num+20})
                 .map((num)=>num+15)
                 .filter((num)=>num>40)

console.log(array2);



////+++++++=REDUCE=+++++++\\\\

const mynums=[1,2,3];
const initialVal=1;
const myTotal=mynums.reduce((accumulator,currentVal)=>(accumulator+currentVal,initialVal)
// {   // console.log(`curr value ${currentVal} and accumulator is ${accumulator}`)}
);
 
// how above reduce func works
// 1. first initialval is fetched by accumulator and then [accumulator+currentVal] is stored into accumulator
// 2. than every time initialval is ignored and this iteration goes on till it iterates whole array  
// 3. and taling about the currentval it stores the value of items in the array 

console.log(myTotal);




const courses = [
    { courseName: "JavaScript Basics", price: 49.99 },
    { courseName: "Advanced Python", price: 79.99 },
    { courseName: "Data Science with R", price: 89.99 },
    { courseName: "Web Development with React", price: 59.99 },
    { courseName: "Machine Learning Essentials", price: 99.99 },
    { courseName: "Cybersecurity Fundamentals", price: 69.99 },
    { courseName: "UI/UX Design Principles", price: 39.99 },
    { courseName: "Digital Marketing Strategies", price: 54.99 },
    { courseName: "Cloud Computing with AWS", price: 74.99 },
    { courseName: "Blockchain Technology", price: 84.99 }
  ];

  // now add total course prices 
 const totalPrices=courses.reduce((acc, courses)=>acc+courses.price,0)


console.log(totalPrices);