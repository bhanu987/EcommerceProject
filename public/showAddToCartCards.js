import products from "../api/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromLS";
import { getCartProductsFromLS } from "./getCartProducts"
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";


let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((currentProduct)=>{
    return cartProducts.some((currElem)=> currElem.id === currentProduct.id
    )
})

console.log(filterProducts)


const cartElement = document.querySelector('#productcartContainer');
const templateContainer = document.querySelector("#productCartTemplate")

const showCartProduct = ()=>{
filterProducts.forEach((currProd)=>{
const {category,id,image,name,stock,price} = currProd;

const productClone = document.importNode(templateContainer.content,true);

let lsActualData = fetchQuantityFromCartLS(id,price)
productClone.querySelector('#cardValue').setAttribute("id",`card${id}`)

productClone.querySelector('.category').textContent = category;
productClone.querySelector('.productName').textContent = name;
productClone.querySelector('.productImage').src = image;
productClone.querySelector('.productQuantity').textContent = lsActualData.quantity;
productClone.querySelector('.productPrice').textContent = lsActualData.price;

productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
    incrementDecrement(event,id,stock,price)
})

productClone.querySelector('.remove-from-cart-button').addEventListener('click',()=>removeProdFromCart(id))

cartElement.appendChild(productClone)
})
}

showCartProduct();

updateCartProductTotal();