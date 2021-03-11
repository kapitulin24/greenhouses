$(document).ready(function(){
    $('ul.species__tabs-name').on('click', 'li:not(.species__tab_active)', function() {
        $(this)
            .addClass('species__tab_active').siblings().removeClass('species__tab_active')
            .closest('div.species__tabs').find('div.species__content').removeClass('species__content_active').eq($(this).index()).addClass('species__content_active');
    });

    $('.feedback__sliders').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrow_left.svg" alt=""></button> <div class="slick-prev-descr">Смотреть<br> предыдущий отзыв</div>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrow_right.svg" alt=""></button> <div class="slick-next-descr">Смотреть<br> следующий отзыв</div>',
        dots: true,
	});
    $('.feedback__sliders').on('setPosition', function(){
        const changeCount = document.querySelector('.feedback__counter'),
              currentSlide = $(".feedback__sliders").slick("slickCurrentSlide"),
              countFeedback = document.querySelectorAll('[role="tabpanel"]');

        changeCount.textContent = `Отзыв ${currentSlide + 1} из ${countFeedback.length}`;
    });
    $('.documentation__sliders').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrow_left-g.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrow_right-g.svg" alt=""></button>',
        slidesToShow: 4,
        draggable: false,
        infinite: false,
        variableWidth: true
	});
});