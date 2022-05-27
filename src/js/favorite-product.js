const favoriteBtns = document.querySelectorAll('.product__favorite');

favoriteBtns.forEach(el => {
    el.addEventListener('click', () => {
        if (el.classList.contains('active')) el.classList.remove('active')
        else el.classList.add('active')
    })
})