const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');


//! without menyBar just onClick function
// burger.addEventListener('click', function () {
//     this.classList.toggle('is-active');
// });  

//* mobile-slide-bar

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
})