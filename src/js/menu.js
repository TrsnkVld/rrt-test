const burger = document.querySelector('.header-main__burger')
const menu = document.querySelector('.header-menu')
const body = document.querySelector('body')
const bg = document.querySelector('.bg')

const addClasses = () => {
    menu.classList.add('header-menu--open')
    burger.classList.add('header-main__burger--open')
    burger.classList.add('header-main__burger--open')
    body.classList.add('menu-opened')
}
const removeClasses = () => {
    menu.classList.remove('header-menu--open')
    burger.classList.remove('header-main__burger--open')
    body.classList.remove('menu-opened')
}

burger.addEventListener('click', () => {
    if (menu.classList.contains('header-menu--open')) removeClasses();
    else addClasses();
})

bg.addEventListener('click', removeClasses)

const onResize = () => {
    if (window.innerWidth >= 992) removeClasses();
}

window.onresize = onResize;