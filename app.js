const burger = document.querySelector('.burger');

//! without menyBar just onClick function
burger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});  