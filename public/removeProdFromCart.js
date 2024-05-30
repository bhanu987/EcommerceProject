import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export  const removeProdFromCart = (id)=>{
    console.log(id)
    let cartProducts = getCartProductsFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
    console.log(cartProducts)

    //update the local storage after removing the item
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts))

    let removeDiv = document.getElementById(`card${id}`)
    if(removeDiv){
        removeDiv.remove()

        showToast("delete",id)
    }

    updateCartValue(cartProducts);

    updateCartProductTotal();
}