let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let crossbar = document.querySelector('#close-bars');

menu.onclick = () =>{
    navbar.classList.toggle('active');
}
crossbar.onclick = () =>{
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}