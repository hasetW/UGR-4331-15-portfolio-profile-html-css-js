const menu=document.querySelector(".nav-toggle");
const link=document.querySelector(".links")
menu.addEventListener("click",function(){
    link.classList.toggle("display");
})