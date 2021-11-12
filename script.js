let menu = document.querySelector('.menu-hamburguer')
let navHeader = document.querySelector('.nav')

const toggleMenu = () => {
    navHeader.classList.toggle('is-active')
    menu.classList.toggle('is-active')
}

menu.addEventListener('click', toggleMenu)