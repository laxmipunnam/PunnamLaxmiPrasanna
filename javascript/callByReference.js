const myProfile = {
    name : 'Laxmi',
    Iage :  22
}

const secondProfile ={
    name : 'Sai',
    Iage : 42
}

function primitiveMutate(primitive){
    primitive++
    console.log(primitive)
}
function mutate(obj) {
    obj.Iage++
}

let nu =100
primitiveMutate(nu)
console.log(nu)

mutate(myProfile)
console.log(myProfile)
mutate(secondProfile)
console.log(secondProfile)