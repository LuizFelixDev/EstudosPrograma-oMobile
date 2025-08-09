import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart= [];
const myWishList = []

console.log("Welcome to the your Shopee Cart!");

//criando 3 itens
const item1 = await createItem("hotwheels ferrari",20.99, 2);
const item2 = await createItem("hotwheels lamborghini", 39.99, 1);
const item3 = await createItem("hotwheels ", 36.00, 1);

//adicionei 2 itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

//deletei 2 itens do carrinho
// await cartService.deleteItem(myCart, item1.name)
// await cartService.deleteItem(myCart, item2.name)

console.log("\n")
await cartService.calculateTotal(myCart);
