// JavaScript to change navbar background on scroll
window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Optionally, you can add other interactions here, like detecting when hovering on the navbar itself.
