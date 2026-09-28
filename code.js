const nav = document.querySelector("nav");
const menue = document.querySelector(".navigation");
const btn = document.querySelector(".btn_menue");

window.addEventListener ("scroll", ()=>{
    nav.classList.toggle("active", window.scrollY > 0);
});

btn.addEventListener ("click", ()=>{
    menue.classList.toggle("active");
    if(window.scrollY == 0){
        nav.classList.toggle("active");
    }
});