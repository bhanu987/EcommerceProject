import './style.css'
import products from "./api/products.json"
import { showProductContainer } from './public/homeProductCards'

console.log(products)

//Define the function named showProductContainer that takes array of products  as input
showProductContainer(products);
