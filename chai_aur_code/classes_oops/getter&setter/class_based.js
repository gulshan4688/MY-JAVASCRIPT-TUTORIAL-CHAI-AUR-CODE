class user {
  constructor(email, password) {
    this.email = email;
    this.password = password 
  }
  get password() {
    return this._password.toUpperCase();
    // if we do below things then returned password will always have mani attached to it 
    // return `${this._password}mani`;
  }
  // email ka getter
  get email(){
    return `${this._email.toUpperCase()}`;
  }
  set password(value) {
    this._password = value;
  }
  set email(value){
    this._email=value.toUpperCase();
  }
}

// above we have taken _password or _email bcoz constructor was already setting pass and email so couldnt do that will same name variable so we changed the variables name 

const mani = new user("mani@gmail.com", "abc");
// console.log(mani.password); 
console.log(mani.email); 
