function talk() {
    console.log(this.sound)
}

let boromir = {sound: 'one does have apples'}

let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir()

let talkz = function() {
    console.log(this.sound)
}

let boromirz = {
    speak: talk,
    sound: 'One does not simply walk into mordor!'
}

boromirz.speak()