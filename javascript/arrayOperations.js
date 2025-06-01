let myFrinds = ['default']

function addMyfriends(friend) {
    myFrinds.push(friend)
    console.log(myFrinds)
}
addMyfriends('Prasanna')
addMyfriends("Laxmi")
addMyfriends("Lucky")

myFrinds[1] = "someone"

myFrinds.pop()
myFrinds.pop()


console.log('Final array', myFrinds)
