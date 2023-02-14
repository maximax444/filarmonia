$('.header__menu').on('click', function (e) {
    e.preventDefault();
    $('.header-drop').toggleClass('active');
    $(this).toggleClass('active');
});
$('.thx__all').on('click', function (e) {
    e.preventDefault();
    $('.thx__block').css('display', 'flex');
    $(this).hide();
});
$('.home-hello__all').on('click', function (e) {
    e.preventDefault();
    $('.home-hello__cont').toggleClass('active');
    $(this).toggleClass('active');
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 150) {
        $('.header__donate').addClass('active');
    } else {
        $('.header__donate').removeClass('active');
    }
    $('.home-video__white').css('opacity', $(document).scrollTop() / $(window).height());
});
$('body').on('mousedown', function (e) {
    if (!(($(e.target).parents('.header').length) || ($(e.target).hasClass('header')))) {
        $('.header-drop').removeClass('active');
        $('.header__menu').removeClass('active');
    }
});
if ($(window).width() < 768) {
    $(".team__wrap").each(function () {
        if (!$(this).hasClass('single')) {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                adaptiveHeight: false
            });
        }

    });
}
$('.team__prev').on('click', function (e) {
    e.preventDefault();
    $(this).closest('section').find('.team__wrap').slick('slickPrev');
});
$('.team__next').on('click', function (e) {
    e.preventDefault();
    $(this).closest('section').find('.team__wrap').slick('slickNext');
});