let open_model = document.querySelector(" .open-model");
let close_model = document.querySelector(".close-model");
let model = document.querySelector(" .model");


open_model.addEventListener("click",()=>{
    model.classList.add("active")
})
close_model.addEventListener("click",()=>{
    model.classList.remove("active")
})




let img_product = document.querySelector(".slider .img-product");
let img_tube = document.querySelectorAll(".plitte .tube .img-tube");

Array.from(img_tube);

img_tube.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        img_product.setAttribute("src",item.getAttribute("src"));
    })
});

//tabe

let btn_comment = document.querySelector(".model .btn-comment");
let btn_details = document.querySelector(".model .btn-details");

let tab_comment = document.querySelector(".model .model-content .comments");
let tab_details = document.querySelector(".model .model-content .details");


btn_comment.addEventListener("click",() => {
    tab_details.classList.add("hed");
    tab_comment.classList.remove("hed");

    btn_comment.classList.add("acitve")
    btn_details.classList.remove("acitve")
})

btn_details.addEventListener("click",() => {

    tab_comment.classList.add("hed");
    tab_details.classList.remove("hed");

    btn_details.classList.add("acitve")
    btn_comment.classList.remove("acitve")

});

function openModel(){
    tab_comment.classList.add("hed");
    tab_details.classList.remove("hed");

    btn_details.classList.add("acitve")
    btn_comment.classList.remove("acitve")
}
openModel();

$('.js-star-rating').on('change','input', function() {
    $('.js-current-rating')
      .removeClass()
      .addClass('current-rating js-current-rating current-rating--' + this.value);
  });