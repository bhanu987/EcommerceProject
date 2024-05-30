import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductsFromLS()

export  const addToCart  = (event,id,stock)=>{

    let  arrLocalStorageProduct = getCartProductsFromLS();
    const currentProduct = document.querySelector(`#card${id}`);
    console.log(currentProduct)

    let quantity = currentProduct.querySelector('.productQuantity').innerText;
    let price = currentProduct.querySelector('.productPrice').innerText;

    let existingProduct = arrLocalStorageProduct.find((currProd) => currProd.id === id)

    price = price.replace("₹","")

    if(existingProduct && quantity>1){
console.log("More than one quantity")
        quantity = Number(existingProduct.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity ,price}
        updatedCart = arrLocalStorageProduct.map((currProd)=>{
            return currProd.id ===id ? updatedCart : currProd
        })
        localStorage.setItem('cartProductLS',JSON.stringify(updatedCart))


        showToast("add",id)

    }
    

    if(existingProduct){
        return false;
    }

    quantity = Number(quantity)

    price = price * quantity;
    console.log(quantity,price)

    let updateCart = {id,quantity,price}
    arrLocalStorageProduct.push(updateCart)
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct))

    updateCartValue(arrLocalStorageProduct)
    showToast("add",id)
}