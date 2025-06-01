let myFriends = ['default']

function Friends(friends) {
    myFriends.unshift(friends)
    console.log(myFriends)
}

for(let i=0;i<10;i++) {
    myFriends.push(i)
}
console.log(myFriends)