//quais açoes meu carrinho pode fazer

//casos de uso
// -> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}
// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index ==! -1){
        userCart.splice(index, 1);
    }
}
// -> remover um item
async function removeItem(userCart, index) {
    // tranforma o indice visual do usuário, para o indice do backend
    const delteIndex = index -1;

    if(delteIndex >= 0 && delteIndex < userCart.length){
        userCart.splice(delteIndex, 1);
    }
}
// -> calcular o total
async function calculateTotal(userCart) {
    console.log("Shopee Cart TOTAL IS:");
    const result = (userCart.reduce((total, item)=> total + item.subtotal(), 0));
    console.log(result);
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}