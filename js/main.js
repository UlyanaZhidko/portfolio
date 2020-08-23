
'use strict';


new WOW().init();



/* слайдер */

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.project-pagination',
        bulletClass: 'project-bullet',
        bulletActiveClass: 'project-bullet-active',
        clickable: true
    },
});




/* очищение инпутов */
document.getElementById('input-name').value = "";
document.getElementById('input-phone').value = "";






/* Политика конфидициальности */
const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad');

/*закрытие модального окна*/
const closeModal = (event) => {
    const target = event.target;

    if (target.closest('.modal__close') ||
        target === modalAdd) {
        modalAdd.classList.add('hide');
    }
};

/*закрытие модального окна нажатием ESC*/
const closeModalESC = (event) => {
    if (event.code === 'Escape') {
        modalAdd.classList.add('hide');
        document.removeEventListener('keydown', closeModalESC);
    };
}

/*открытие модального окна */
addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    document.addEventListener('keydown', closeModalESC);
});

/*закрытие модального окна*/
modalAdd.addEventListener('click', closeModal);