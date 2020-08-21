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