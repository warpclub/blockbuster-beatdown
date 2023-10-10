let smoke = document.getElementById('smoke');
let text = document.getElementById('text');
let tagline = document.getElementById('tagline');
let btn = document.getElementById('btn');
let salmankenya = document.getElementById('salmankenya');
let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    smoke.style.top= value+'px';
    salmankenya.style.bottom= value*5.5+'px';
    text.style.marginRight = value*15+'px';
    tagline.style.marginRight = value*15+'px';
    // text.style.bottom = value*3.5+'px';
    btn.style.bottom = value*3.5+'px';
})