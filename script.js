class User {
    constructor(email, name){
        this.email = email;
        this.name= name;
        this.score = 0;
    }
    
    login(){
        console.log(this.email, 'just logged in')
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
    }
}

class Admin extends User {
    deleteUser() {
        
    }
}

var userOne = new User('rye@ninjas.com', 'rye')
var userTwo = new User ('yoshi@mariokorp.com', 'yoshi')