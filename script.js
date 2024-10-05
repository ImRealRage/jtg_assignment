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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = 70; // Adjust this value to match the height of your fixed nav

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

//Print data in console
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Print data to console
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from actually submitting (you can remove this in production)

    // Show the toast notification
    showToast();

    // Clear the form (optional)
    document.getElementById('contact-form').reset();

    // You can also add your code here to send the form data
});

function showToast() {
    // Get the toast element
    const toast = document.getElementById('toast');

    // Add the "show" class to display the toast
    toast.className = "toast show";

    // After 3 seconds, remove the show class to hide the toast
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000); // 3 seconds duration
}