const bMenu = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu');

bMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
    bMenu.classList.toggle('active');
})