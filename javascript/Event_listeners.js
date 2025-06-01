const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
const counterEl = document.getElementById('counter')

const ulElement = document.getElementById('list-items')

let counter = 0

function incrementCounter(){
    counter++
    counterEl.innerText = counter

    const li = document.createElement('li')

    li.setAttribute('data-counter', counter)

    if(counter % 2 === 0) {
        li.style.background ='red'
        li.style.padding = '10px'
    }else{
        li.style.background ='yellow'
        li.style.padding = '20px'
    }

    li.innerHTML = '<b>Sentence</b> ' + counter
    // can use above or bellow commented lines

    /*const b = document.createElement('b')

    const textNode = document.createTextNode('Sentence')
    b.appendChild(textNode)

    const textNode2 = document.createTextNode(counter)
    li.appendChild(b)
    li.appendChild(textNode2)*/

    ulElement.appendChild(li)
}

function decrementCounter(){

    const li = ulElement.querySelector('[data-counter="'+counter+'"]')

    const number = parseInt(li.getAttribute('data-counter'),10)

        li.remove()

    counter--
    counterEl.innerText = counter
}


incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)