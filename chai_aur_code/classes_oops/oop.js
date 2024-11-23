const user = {
  username: "mani",
  login: true,
  // a function in the object
  getUserDetails: function () {
    // console.log("got user details");
    console.log(`username:${this.username}`); // here we are using this keyword bcoz node doesnt know which username we are talking about
    console.log(this); // this gives us whole info about object ^ above so becoz we printing it inside this class
  }
};
// console.log(user.login);
// console.log(user.getUserDetails());
console.log(this); // this is in the global context so for now it only gives {} empty bcoz there is nothing in the global context
// but there is very much more in brower's gloabl context if we log this in the browsers console than it will give much just than empty curly braces😁




// +++++++++++++++++>>>> staring a constructor

function user1(username, loginCount, isLoggedIn) {
  this.username = username; // the left one is variable and right one is the value which we are passing in the argument
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
  return this // this return will pass on all the this values to who ever plays with this constructor but not compulsory to write it 
}

const userOne=  user1("mani",12,true);
// if we try to pass new value to the constructor 
const usertwo= new user1("gulshan",10,false);
// then it over writes the values and wihout printing usertwo we get the new values  
// this all happens when dont use new keyword but when we use it always create new copy of the instance 

// console.log(userOne);
// console.log(usertwo);

console.log(userOne.constructor);
  