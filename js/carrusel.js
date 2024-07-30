function classToggle() {
    var el = document.querySelector('.icon-cards__content');
    el.classList.toggle('step-animation');
}

document.querySelector('#toggle-animation').addEventListener('click', classToggle);

$(document).ready(function(){
    $(".testimonials-carousel").owlCarousel({
        items: 4, 
        loop: true, 
        margin: 10,
        autoplay: true, 
        autoplayTimeout: 5000,
        autoplayHoverPause: true, 
        nav: true, 
        dots: true, 
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});
