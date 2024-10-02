// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {  // If scrolled down 100px or more
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});

// Owl Carousel initialization
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        stagePadding: 80,
        responsive: {
            0: {
                items: 1,
                stagePadding: 30
            },
            600: {
                items: 2,
                stagePadding: 50
            },
            1000: {
                items: 3,
                margin: 5,
                stagePadding: 90
            }
        }
    });
});
