const hamburgerMenu = document.querySelector('.header-right > a');
const hbMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener("click", function(){
    // document.querySelector('.hamburger-menu').classList.add('active');
    hbMenu.classList.toggle('active');
});

const hamburgerMenuClose = document.querySelector('.hamburger-menu > a');

hamburgerMenuClose.addEventListener("click", function(){
    // document.querySelector('.hamburger-menu').classList.remove('active');
    hbMenu.classList.toggle('active');
});