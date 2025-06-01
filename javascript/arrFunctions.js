const frnds = [
    {
        name: "x",
        age : 17
    },
    {
        name: "x",
        age : 21
    },
    {
        name: "x",
        age : 19
    },
    {
        name: "x",
        age : 22
    },

]

const arr = [1,2,3,4,5,6,7,8]
const newMappedArray_forEq = []

for(let i=0;i<arr.length;i++){
    const el = arr[i]
    newMappedArray_forEq.push(el **2)
}

const newMappedArray = arr.map(element => element **2)

const filteredArray = frnds.filter(element => element.age > 18)

const findX = frnds.find( frnds => frnds.name === 'x')

console.log(findX)
console.log(frnds, filteredArray)
