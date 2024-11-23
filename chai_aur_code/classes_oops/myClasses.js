// // ES6

// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   tocapital() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new user("mani", "maani@gamil", "123");

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.tocapital());

//                                     // BEHIND THE SCENE

  function user1(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
user1.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}
user1.prototype.tocapital=function(){
    return `${this.username.toUpperCase()}`;
}
 

// we will create a new user
const mani=new user1("rani","rani@gmail","123");
console.log(mani);
console.log(mani.encryptPassword());
console.log(mani.tocapital());