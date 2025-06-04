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
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')
    console.log(listItems)
    console.log(thumbItems)
    if (type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    },600);
}

//audios

const audios = [
    { btnId: 'f40snd', audioId: 'f40mp3' },
    { btnId: 'rx7snd', audioId: 'rx7mp3' },
    { btnId: 'suprasnd', audioId: 'supramp3' },
    { btnId: 'r34snd', audioId: 'r34mp3' },
];

let currentAudio = null;  // Guarda o áudio que está tocando

audios.forEach(item => {
    const btn = document.getElementById(item.btnId);
    const audio = document.getElementById(item.audioId);

    btn.addEventListener('click', () => {
        // Se tem algum áudio tocando, para
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Atualiza o áudio atual e toca
        currentAudio = audio;
        currentAudio.currentTime = 0;
        currentAudio.play();
    });
});

