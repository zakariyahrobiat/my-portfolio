 hamburger = document.getElementById("hamburger");
 navLink = document.querySelector(".nav-link")
 close = document.querySelector(".close")

 hamburger.addEventListener("click", ()=>{
     navLink.style.width = "200px"
    
 })

 close.addEventListener("click", ()=>{
    navLink.style.width = "0"
 })