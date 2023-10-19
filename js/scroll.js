const arrow = document.querySelector('#up');
const header = document.querySelector('.header');
let shown = false;

arrow.addEventListener('click', ()=> {
    header.scrollIntoView({behavior: 'smooth'});    
});

function checkScroll() {
    if(window.scrollY >= 1200) {
        shown = true;
        arrow.style.opacity = "1";
        arrow.style.height = "50px";
        arrow.style.transform = 'translateY(0%)';
        console.log('shown');
    } else {
        shown = false;
        arrow.style.opacity = "0";
        arrow.style.height = "0";
        arrow.style.transform = 'translateY(1000%)';
        console.log('not shown');
    }
}
window.addEventListener('scroll', checkScroll);
