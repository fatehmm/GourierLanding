//MOBILE BUTTON CLOSE OPEN 
const menuCloseButton = document.getElementById('mobile-close-button');
const mobileMenu = document.getElementById('mobile-menu');
const openMenu  = document.getElementById('open-menu-button');
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
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let sliders = Array.from(document.getElementsByClassName('slider-item'));
console.log(sliders)

var $ = element => {return document.querySelector(element)};
var $$ = element => {return document.querySelectorAll(element)};
let dotsDiv = $('#dots');
let dots = Array.from($$('.dot'));
let buttons = [prevButton, nextButton]
window.addEventListener('load', 
    function ( ) {
    if(sliders[0].style.transform = 'translateX(0%)'){
        dots.forEach(dot => {
            dot.style.backgroundColor = "rgb(156, 163, 175)"
        })
        dots[0].style.backgroundColor = "rgb(29, 78, 216)"
    }
}

)

buttons.forEach(button => {
    button.addEventListener('click', function () {
        
    } )
})

prevButton.addEventListener('click', function() {
    sliders.forEach(slide => {
        let prevStyle = slide.style.transform;
        let styles = []
        let eslStyle = ''
        if (prevStyle) {
            styles = prevStyle.split('(')
            eslStyle = styles[1].split(')')[0];
            eslStyle = parseInt(eslStyle.slice(0, -1))
            
        }
        if(eslStyle==null || eslStyle != 0){
            if(styles) {
                slide.style.transform = `translateX(${eslStyle+100}%)`
                eslStyle += 100;
                console.log(eslStyle)
            } else {
                slide.style.transform = `translateX(100%)`
                eslStyle = 100
                console.log(eslStyle)
            }
            
        }
        if(sliders[0].style.transform == 'translateX(0%)'){
            dots.forEach(dot=> {
                dot.style.backgroundColor = "rgb(156 ,163, 175)"
            })
            dots[0].style.backgroundColor = "blue"

        } else if(sliders[0].style.transform == 'translateX(-100%)'){
            dots.forEach(dot=> {
                dot.style.backgroundColor = "rgb(156 ,163, 175)"
            })
            dots[1].style.backgroundColor = "blue"
        }else if(sliders[0].style.transform == 'translateX(-200%)'){
            dots.forEach(dot=> {
                dot.style.backgroundColor = "rgb(156 ,163, 175)"
            })
            dots[2].style.backgroundColor = "blue"
        }else if(sliders[0].style.transform == 'translateX(-300%)'){
            dots.forEach(dot=> {
                dot.style.backgroundColor = "rgb(156 ,163, 175)"
            })
            dots[3].style.backgroundColor = "blue"
        }
        
        
    });

})




nextButton.addEventListener('click', function() {
    sliders.forEach(slide => {
        let prevStyle = slide.style.transform;
        let styles = []
        let eslStyle = 0
        if (prevStyle) {
            styles = prevStyle.split('(')
            eslStyle = styles[1].split(')')[0];
            eslStyle = parseInt(eslStyle.slice(0, -1))
            console.log(eslStyle)
        }
        if(eslStyle ==null || eslStyle !=-300){
            if(styles) {
                slide.style.transform = `translateX(${eslStyle-100}%)`
                eslStyle -= 100
            } else {
                slide.style.transform = `translateX(-100%)`
                eslStyle = -100
            }
            
        }
        if(sliders[0].style.transform == 'translateX(0%)'){
            dots.forEach(dot=> {
                dot.style.backgroundColor = "rgb(156 ,163, 175)"
            })
            dots[0].style.backgroundColor = "blue"

        } else if(sliders[0].style.transform == 'translateX(-100%)'){
            dots.forEach(dot=> {
                dot.style.backgroundColor = "rgb(156 ,163, 175)"
            })
            dots[1].style.backgroundColor = "blue"
        }else if(sliders[0].style.transform == 'translateX(-200%)'){
            dots.forEach(dot=> {
                dot.style.backgroundColor = "rgb(156 ,163, 175)"
            })
            dots[2].style.backgroundColor = "blue"
        }else if(sliders[0].style.transform == 'translateX(-300%)'){
            dots.forEach(dot=> {
                dot.style.backgroundColor = "rgb(156 ,163, 175)"
            })
            dots[3].style.backgroundColor = "blue"
        }
        
    });

})