class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)

        // this super keyword is used for inherting data from the parent classs like here it is inherting username 

        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}
const chai =new teacher("mani","mani@gamil.com","123");
console.log(chai);
chai.addCourse();

const newChai= new user ("mani_2");
//newMani.addCourse(); // cant execute because user has no excess to addCourse
//but may be logMe has
newChai.logMe();      // yes it can be accessed 

console.log(chai===newChai);
console.log(chai instanceof teacher);
console.log(newChai instanceof user);      // instance of meaning kaha se aa rha hai 
