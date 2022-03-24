 hamburger = document.getElementById("hamburger");
 navLink = document.querySelector(".nav-link")
 close = document.querySelector(".close")

 hamburger.addEventListener("click", ()=>{
     navLink.classList.toggle("nav-link2")
    
 })
 close.addEventListener("click", ()=>{
     navLink.style.display = "none"
 })

 