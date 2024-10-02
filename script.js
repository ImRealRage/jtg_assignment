 window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {  // If scrolled down 100px or more
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
