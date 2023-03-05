const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const scroll = document.querySelector('.scroll')


//! without menuBar just onClick function
// burger.addEventListener('click', function () {
//     this.classList.toggle('is-active');
// });  

//* mobile-slide-bar

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
});

window.addEventListener('scroll', () => {
    scroll.classList.toggle('sticky', window.scrollY > 0);
});