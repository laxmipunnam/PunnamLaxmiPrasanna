const promiseOject = fetch('/data.json')

const promiseOjectAgain = promiseOject.then(response => {
    const promiseOject2 = response.json()
    
    return promiseOject2
}).then(finalData =>{
    console.log('Final data is', finalData)
})