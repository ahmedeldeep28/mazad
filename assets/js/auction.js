let btn_Toggle = document.querySelectorAll(".fillter .btn-toggle");
let content_item = document.querySelectorAll(".fillter .content");
Array.from(btn_Toggle);
Array.from(content_item);
btn_Toggle.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        item.classList.toggle("rotate")
        content_item[index].classList.toggle("hidden")
    })
})

let fillter = document.querySelector(".fillter");
let btn_toggle_fillter = document.querySelector(".fillter .head .btn-toggle-fillter");

btn_toggle_fillter.addEventListener("click",()=>{
    btn_toggle_fillter.classList.toggle("rotate")
    fillter.classList.toggle("hidden")
})



let open_model = document.querySelectorAll(".auction .card .open-model");
let close_model = document.querySelectorAll(".auction .card .close-model");
let model = document.querySelectorAll(".auction .auction-cards .model");
Array.from(open_model);
Array.from(model);

open_model.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        model[index].classList.add("active")
    })
})
close_model.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        model[index].classList.remove("active")
    })
});


let img_product = document.querySelector(".slider .img-product");
let img_tube = document.querySelectorAll(".plitte .tube .img-tube");

Array.from(img_tube);

img_tube.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        img_product.setAttribute("src",item.getAttribute("src"));
    })
})



