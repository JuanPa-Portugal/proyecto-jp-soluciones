
let abierto = false;
const enlaces = document.getElementsByClassName("enlaces")[0];
const menuResponsive = document.getElementsByClassName("menu-responsive")[0];
const iconResponsive = document.getElementById("menu-responsive");
const toggleMenu = () =>{
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out"
}
menuResponsive.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto = true;
    }else{
        abierto = false;
    }
})
window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto == true){
        if(e.target !== iconResponsive){
            toggleMenu();
            abierto = false;
        }
    }
})
window.addEventListener("resize", function(){
    if(this.screen.width > 768){
        if(abierto == true){
            toggleMenu();
            enlaces.style,transition ="none";
            abierto = false;
        }
    }
})
