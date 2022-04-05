
function viewTotelSalry(){
    let price_product = document.querySelector(".product-detils .detils .price .number");
    let totel_salry = document.querySelector(".product-detils .detils .totel-salry .totel-number");
    let amount = document.querySelector(".product-detils .detils .input-amount .amount");
    
    
    totel_salry.textContent = amount.value * price_product.textContent;
    amount.addEventListener("change",()=>{
        totel_salry.textContent = amount.value * price_product.textContent
    })
}
viewTotelSalry();

let img_product = document.querySelector(".product-detils .slider .img-product");
let img_tube = document.querySelectorAll(".product-detils .plitte .tube .img-tube");

Array.from(img_tube);

img_tube.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        img_product.setAttribute("src",item.getAttribute("src"));
    })
})




