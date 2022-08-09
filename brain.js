// auto tying
var typed = new Typed('.element', {
    strings: ["SURYA P R,", "A FRONT-END-DEVELOPER,", "A UI DESIGNER,", "A ELECTRONICS AND COMMUNICATION ENGINEER..."],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  });


// Preloader 

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
loader.style.display = "none";
})