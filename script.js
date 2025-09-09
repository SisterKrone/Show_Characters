const list = document.querySelectorAll('.item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

const listLength = list.length;
let itemActive = 0;

function removeActive() {
    let oldItemActive = document.querySelector('.active');
    oldItemActive.classList.remove('active')
}

nextButton.onclick = () => {
    removeActive()
    itemActive = itemActive >= listLength - 1 ? 0 : itemActive + 1
    list[itemActive].classList.add('active')
}

prevButton.onclick = () => {
    removeActive()
    itemActive = itemActive <= 0 ? listLength - 1 : itemActive - 1
    list[itemActive].classList.add('active')
}