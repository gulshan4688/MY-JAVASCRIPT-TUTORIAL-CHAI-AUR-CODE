function multi(num){
    return num*5;
}
multi.power=2;
console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;
}

// createUser ek func hai aur uske andar prototype mei humne function inject kr diya joki hai increamnet aur uska kaam hai score++

createUser.prototype.increament=function(){
    this.score++ // ab baat hai score kiska badhayega hum koi specific value nhi de skte qki isko call to bahut jagah kiya jayega thats why we use this (mtlb jisne bhi bulaya uska score ++ krdo)
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai= new createUser("chai",25)
const tea=createUser("tea",250)

// now we have created so many methods now its turn to use them
chai.printMe();