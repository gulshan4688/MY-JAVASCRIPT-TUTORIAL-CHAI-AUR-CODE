function user (email,password){
    this._email=email
    this._password=password
    Object.defineProperty(this,'email',{
        get: function(){
            
            return this._email;
        },
        set: function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password=value
        }
    })
}
const mani=new user("mani@gmail","123");
console.log(mani);
console.log(mani.email);
console.log(mani.password);
