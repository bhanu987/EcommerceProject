import { getCartProductsFromLS } from "./getCartProducts";

export const updateCartProductTotal = ()=>{

    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductsFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum,currElem)=>{
        let productPrice = parseInt(currElem.price)||0;
        return productPrice+accum;
    },initialValue)

    //console.log(totalProductPrice)

    productSubTotal.innerText = `₹${totalProductPrice}`;
    productFinalTotal.innerText = `₹${totalProductPrice+50}`;
}