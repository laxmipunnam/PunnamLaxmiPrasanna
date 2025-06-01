let age = 24
m = age + 1

console.log(m)

const Age_new = 21
const a = Age_new - 5

console.log(a)

const power = 5
const updatePower = power ** 5
console.log(updatePower)


const FriendsAge =[ 20, 19, 22, 21, 23]
const sum = FriendsAge[0] + FriendsAge[1] + FriendsAge[2] + FriendsAge[3] + FriendsAge[4]
console.log("Sum of friends age", sum)
const totalFriends = 5

console.log("total firends", totalFriends)

const avg =sum / totalFriends

console.log("Average friend age", avg)

let n = 43
n++
console.log(n)

let num = 43
num--
console.log(num)


/*--------- Functions -----------------*/
let newAge = 45
let add = 200
let totalCount = 5

function printAllVariables() {
    console.log('My age', newAge)
    console.log('My sum', add)
    console.log('Total',totalCount)

}
printAllVariables()

newAge = 23
printAllVariables()


