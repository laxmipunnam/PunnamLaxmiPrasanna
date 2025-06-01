const heading = document.querySelector('.hello')
heading.innerText = 'Hello Prasanna'

const allListItems = document.querySelectorAll('ul li');

for (let i = 0; i < allListItems.length; i++) {
    const listItem = allListItems[i];
    listItem.innerText = 'YOOOOOO';
}


const ul= document.querySelector('ul')
const li=document.getElementById('li')

console.log(li)
