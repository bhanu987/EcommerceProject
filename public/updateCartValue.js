const cartValue = document.querySelector(".cart-icon");


export const updateCartValue = (cartProducts)=>{
return cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"
style="color: #fcfcfc;">  ${
    cartProducts.length} </i>`

}