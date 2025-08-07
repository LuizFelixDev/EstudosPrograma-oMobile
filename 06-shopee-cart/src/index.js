import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart= [];
const myWishList = []

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari",20.99, 7);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

cartService.addItem(myCart, item1);
cartService.addItem(myWishList, item2);

console.log("Shopee Cart TOTAL IS:");
await cartService.calculateTotal(myCart);
