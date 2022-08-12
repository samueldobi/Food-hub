const navscroll = document.querySelector('.navbar-scroll')
const phone = document.getElementById('phone')
// functions
// change the color of the navbar on scroll 
function changeNav(){
    navscroll.classList.add('navbar-bg')
}
document.addEventListener('scroll', changeNav)

