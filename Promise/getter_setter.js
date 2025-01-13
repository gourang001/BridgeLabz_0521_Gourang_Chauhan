class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        //return this._password.toUpperCase();
        return `${this._password}gourang`
    }

    set password(value){
        this._password=value;
    }
}

const p1=new user("goni@gmail.com","abc");
console.log(p1.password);
