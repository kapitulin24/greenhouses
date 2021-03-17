$(document).ready(function(){

    //start tabs
    $('ul.species__tabs-name').on('click', 'li:not(.species__tab_active)', function() {
        $(this)
            .addClass('species__tab_active').siblings().removeClass('species__tab_active')
            .closest('div.species__tabs').find('div.species__content').removeClass('species__content_active').eq($(this).index()).addClass('species__content_active');
        });
    //end tabs

    //start species card slick slider
    $('.species__card-preview').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      });
    //end species card slick slider
    
    //start species card slick slider for mobile max-width 575px
    $('.species__card-mobile').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrow_left-g.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrow_right-g.svg" alt=""></button>'        
      });
    //end species card slick slider for mobile max-width 575px

    //start reload slider after change tabs
    $('ul.species__tabs-name').on('click', () => {
        $('.species__card-mobile').slick('reinit');
        $('.species__card-preview').slick('reinit');
      });
    //end reload slider after change tabs

    //start section feedback slick slider
    $('.feedback__sliders').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrow_left.svg" alt=""></button> <div class="slick-prev-descr">Смотреть<br> предыдущий отзыв</div>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrow_right.svg" alt=""></button> <div class="slick-next-descr">Смотреть<br> следующий отзыв</div>',
        dots: true,
	});

    //start подсчет отзыв № из
    $('.feedback__sliders').on('setPosition', function(){
        const changeCount = document.querySelector('.feedback__counter'),
              currentSlide = $(".feedback__sliders").slick("slickCurrentSlide"),
              countFeedback = document.querySelectorAll('[role="tabpanel"]');

        changeCount.textContent = `Отзыв ${currentSlide + 1} из ${countFeedback.length}`;
    });
    //end подсчет отзыв № из
    //end section feedback slick slider

    //start section documentation slick slider
    $('.documentation__sliders').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrow_left-g.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrow_right-g.svg" alt=""></button>',
        slidesToShow: 4,
        draggable: false,
        infinite: false,
        variableWidth: true
	});
    //end section documentation slick slider
    
    //start всплывающее меню
    const menu = document.querySelector('.header-content__navigation'),
          menuItem = document.querySelectorAll('.header-content__navigation ul li'),
          hamburger = document.querySelector('.header__hamburger');

        hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        menu.classList.toggle('header-content__navigation_active');
    });
    //start клик по пункту меню закрывает меню
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            menu.classList.toggle('header-content__navigation_active');
        })
    });
    //end клик по пункту меню закрывает меню
    //end всплывающее меню

    //start show input on click button
    const getLink = document.querySelector('button.modal__get-link'),
          showBtn = document.querySelector('button.modal__btn'),
          showInpt = document.querySelectorAll('.modal input');

    getLink.addEventListener('click', (e) => {
        e.preventDefault();
        getLink.style = 'display: none';
        showBtn.style = 'display: block';
        showInpt.forEach((e) => {
            e.style = 'display: block';
        });
    });
    //end show input on click button
});