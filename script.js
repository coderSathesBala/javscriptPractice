let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound)
    }
}

let talkFunction = dog.talk
let boundFunction = 
    talkFunction.bind(dog)
boundFunction()

button.addEventListener(
    'click', 
    dog.talk.bind(dog)
)