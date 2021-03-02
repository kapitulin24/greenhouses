$('ul.species__tabs-name').on('click', 'li:not(.species__tab_active)', function() {
    $(this)
        .addClass('species__tab_active').siblings().removeClass('species__tab_active')
         .closest('div.species__tabs').find('div.species__content').removeClass('species__content_active').eq($(this).index()).addClass('species__content_active');
  });