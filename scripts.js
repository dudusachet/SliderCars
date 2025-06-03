console.log("se voçê achou isso parabens!!! -Dudu Sachet")

let btnNext = document.querySelector('.next')
console.log(btnNext)
let btnBack = document.querySelector('.back')
console.log(btnBack)

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.list .thumb-item')
    console.log(listItems)
    console.log(thumbItems)
    if (type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])

    } else {
        list.prepend(listItems[3])
        thumb.appendChild(thumbItems[3])
    }

}