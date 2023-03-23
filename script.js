
const body = document.querySelector('body');
const hamburgerButton = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('lock-scroll');
});