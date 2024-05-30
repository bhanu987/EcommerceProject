import { getCartProductsFromLS } from "./getCartProducts"
import { updateCartProductTotal } from "./updateCartProductTotal"

export const incrementDecrement = (event,id,stock,price)=>{
    const currentCardElement = document.querySelector( `#card${id}`)
    //console.log(currentCardElement)
    const productQuantity = currentCardElement.querySelector('.productQuantity')
    const productPrice = currentCardElement.querySelector('.productPrice')

    let quantity = 1;
    let localStoragePrice = 0;

    //get data from local storage

    let localCartProducts = getCartProductsFromLS();

    let existingProd = localCartProducts.find((currProd)=> currProd.id === id)
    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price
    }
    else{
        localStoragePrice = price;
        price = price;
    }

    if(event.target.className ==="cartIncrement"){
        if(quantity < stock){
            quantity+=1;
        }
        else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity = quantity - 1;
        }

    }

    localStoragePrice = price * quantity;
    let updatedCart = {id, quantity ,price:localStoragePrice}
    updatedCart = localCartProducts.map((currProd)=>{
        return currProd.id ===id ? updatedCart : currProd
    })
    localStorage.setItem('cartProductLS',JSON.stringify(updatedCart))

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice

    updateCartProductTotal();
}