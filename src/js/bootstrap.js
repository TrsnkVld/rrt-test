import { Tooltip, Modal } from 'bootstrap';

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(el => {
    return new Tooltip(el, {
        trigger: 'hover focus',
        boundary: document.querySelector('body')
    })
})

const vinModal = new Modal(document.getElementById('vinModal'))
tooltipList.forEach(el => {
    el._element.addEventListener('click', () => {
        vinModal.show()
    })
});


const deliveryModal = new Modal(document.getElementById('deliveryModal'))
document.querySelectorAll('.product__icon-item--city').forEach(el => {
    el.addEventListener('click', () => {
        deliveryModal.show()
    })
});

// const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
// product__vin - status