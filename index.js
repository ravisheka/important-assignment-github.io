var getsidebar = document.querySelector("nav")

var togglebtn = document.getElementById("toggleBtn");
togglebtn.addEventListener("click",function(){
    getsidebar.classList.toggle("active")
}
)