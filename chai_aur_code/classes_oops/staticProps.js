class user {
    constructor(username){
        this.username=username
        
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
    // the keyword static stops method for being accessed by the outisider calls 
    createId(){
        return `123`;
    }

}
const mani=new user("mani")
// console.log(mani.createId());

// inhertance 
class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const student=new teacher ("nupur","gmail.com")
console.log(student);
student.logMe()
console.log(student.createId());    // this only works if there is no static keyword used before createId();