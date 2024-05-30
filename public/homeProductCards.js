const product = document.querySelector('#product')
const productTemplate = document.querySelector('#productTemplate')
import { homeQuantityToggle } from "./homeQuantityToggle";

import { addToCart } from "./addToCart";

export const showProductContainer =  (products)=>{

    if(!products){
        return false;
    }
    products.forEach(currentElement => {
        const {category,description,id,image,name,price,stock} = currentElement;

        const productClone = document.importNode(productTemplate.content,true)
        console.log(productClone)

        productClone.querySelector("#cardValue").setAttribute('id',`card${id}`)
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src =image;
        productClone.querySelector(".productImage").alt =name;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = "₹ "+price;
        productClone.querySelector(".productActualPrice").textContent =     `₹  ${price*4.0}`;
        productClone.querySelector(".productStock").textContent = stock;

        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            homeQuantityToggle(event,id,stock);
        })

        productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
            addToCart(event,id,stock);
        })

        product.append(productClone)
    });

}