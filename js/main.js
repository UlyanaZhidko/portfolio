'use strict';

new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated', // WOW будет добавлять этот класс
  offset: 0,
  mobile: true,
  live: true
}).init();


/* ---Политика конфидициальности -----*/
const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad');

//закрытие модального окна
const closeModal = (event) => {
    const target = event.target;

    if (target.closest('.modal__close') ||
        target === modalAdd) {
        modalAdd.classList.add('hide');
    }
};

//закрытие модального окна нажатием ESC
const closeModalESC = (event) => {
    if (event.code === 'Escape') {
        modalAdd.classList.add('hide');
        document.removeEventListener('keydown', closeModalESC);
    };
}

//открытие модального окна
addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    document.addEventListener('keydown', closeModalESC);
});

//закрытие модального окна
modalAdd.addEventListener('click', closeModal);



/*---стрелка вверх-----*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({ opacity: 1 }).fadeIn('slow');
        }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
});
$('#upbutton').click(function() {
    $('html, body').stop().animate({ scrollTop: 0 }, 300);
});



/*------фильтр проектов ---------*/
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Показать отфильтрованные элементы
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Скрыть элементы, которые не выбраны
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


/* Меню */
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');

/* Смена языка */
$('.en').on('click', function() {
    $('[data-en]').each(function() {
        $(this).text($(this).attr('data-en'));
    });
});

$('.ru').on('click', function() {
    $('[data-ru]').each(function() {
        $(this).text($(this).attr('data-ru'));
    });
});




//дата времени работы

var today = new Date();
var startWork = new Date(2022, 9, 30); //установить дату начала работы
var timestamp = (today.getTime() - startWork.getTime());
const date = new Date(timestamp);
var years = date.getYear() - 70;
var months = date.getMonth() + 1;

if (years > 0) {
    document.querySelector('span.work_date').innerHTML = "(" + years + " год " + months + " мес.)";
} else {
    document.querySelector('span.work_date').innerHTML = "(" + months + " мес.)";
}