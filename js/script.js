

$(document).ready(function(){
    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    // sample video popup
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

   // FAQ accordion
$('.faq-head').each(function(){
    $(this).click(function(){
        $(this).next().toggleClass('show-faq-content');
        let icon = $(this).children('span').children('i').attr('class');

        if(icon == 'fas fa-plus'){
            $(this).children('span').html('<i class="fas fa-minus"></i>');
        } else {
            $(this).children('span').html('<i class="fas fa-plus"></i>');
        }
    });
});
})