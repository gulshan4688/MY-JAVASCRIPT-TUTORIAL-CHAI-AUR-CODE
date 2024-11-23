const user={
        _email:'mani@gmail.com',
        password:'112',

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this.email=value;
    }

}
 const mani=Object.create(user)
 console.log(mani.email); 
 // we are adding _ before email and password bcoz we want that property to be private 