const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');
const welcome = document.querySelector('.welcome__btns');

const anchors = document.querySelectorAll('a[href*="#"]');

burger.addEventListener('click', e => {
    e.preventDefault();

    burger.classList.toggle('burger-open');
    navbar.classList.toggle('navbar-open');
    body.classList.toggle('scroll');
});

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        if (navbar.classList.contains('navbar-open')) {
            navbar.classList.remove('navbar-open');
            burger.classList.remove('burger-open');
            body.classList.remove('scroll');
        }

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}

const headerOptions = {};

const headerObserver = new IntersectionObserver((entries, headerOptions) => {
    entries.forEach(entry => {
        if (window.innerWidth <= 576) return;

        if (!entry.isIntersecting) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
}, headerOptions);

headerObserver.observe(welcome);
