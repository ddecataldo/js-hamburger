const hamburgerMenu = document.querySelector('.header-right > a');

hamburgerMenu.addEventListener("click", function(){
    hamburgerMenuShow = document.querySelector('.hamburger-menu').classList.add('active');
});

const hamburgerMenuClose = document.querySelector('.hamburger-menu > a');

hamburgerMenuClose.addEventListener("click", function(){
    hamburgerMenuShow = document.querySelector('.hamburger-menu').classList.remove('active');
});

