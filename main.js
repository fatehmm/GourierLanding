//MOBILE BUTTON CLOSE OPEN 
const menuCloseButton = document.getElementById('mobile-close-button');
const mobileMenu = document.getElementById('mobile-menu');
const openMenu = document.getElementById('open-menu-button');
menuCloseButton.addEventListener('click', function () {
    mobileMenu.classList.remove('opacity-100', 'scale-100');
    mobileMenu.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        mobileMenu.style.display = 'none'
    }, 300);
    
})
openMenu.addEventListener('click', function (){
    
    mobileMenu.style.display = 'block';
    setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', 'scale-95');
    mobileMenu.classList.add('opacity-100', 'scale-100');
    }, 10);
})


