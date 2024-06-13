document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
        const spans = menuToggle.getElementsByClassName('menu-span');
        for (let span of spans) {
            span.classList.toggle('clicked');
            span.classList.toggle('unclicked');
        }
    });

    const links = document.querySelectorAll('.link-menu');
    links.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('open');
            const spans = menuToggle.getElementsByClassName('menu-span');
            for (let span of spans) {
                span.classList.remove('clicked');
                span.classList.add('unclicked');
            }
        });
    });
});

/* Slide Show */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}