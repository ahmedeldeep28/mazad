let btn_open = document.querySelector(".open");
let btn_close = document.querySelector(".btn-close");
let siedbar = document.querySelector(".siedbar");
let navBar = document.querySelector("nav");

btn_open.onclick = ()=>{
  siedbar.classList.toggle("show")
}
btn_close.onclick = ()=>{
  siedbar.classList.remove("show")
}

let icon_down = document.querySelector(".icon-down");
let drop_down = document.querySelector(".drop");

icon_down.addEventListener("click",()=>{
  drop_down.classList.toggle("open");
})
