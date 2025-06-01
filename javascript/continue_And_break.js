/*--------------------- continue -----------------*/
function skipNum(numb){
    let evenNum =[]

    for(let i=0;i<20;i++) {
        if(i % 2 === 1){
            continue
        }
        if(i === numb){
            continue
        }
        evenNum.push(i)
    }
    return evenNum
}
console.log(skipNum(10))
console.log(skipNum(2))

/*---------------  break ---------------*/
function BreakNum(number){
    let evenNum =[]

    for(let i=0;i<20;i++) {
        if(i === number){
            break
        }
        if(i % 2 === 0) {
            evenNum.push(i)
        }
    }
    console.log('final numbers length is', evenNum.length)
    return evenNum
}
console.log(BreakNum(14))
