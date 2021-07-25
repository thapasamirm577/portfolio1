const btnMenu = document.getElementById("menu__icon");
const btnStr = document.getElementById('canc__nav');
const navBody = document.querySelector(".body__navbar");

btnMenu.onclick = ()=>{
    navBody.classList.remove("passive");
    navBody.classList.add("active");
    btnMenu.style.visibility = "hidden";

}
btnStr.onclick = ()=> {
    navBody.classList.remove("active")
    navBody.classList.add("passive");
    btnMenu.style.visibility = "visible"
}