//quais açoes meu carrinho pode fazer

//casos de uso
// -> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}
// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    
}
// -> remover um item
async function removeItem(userCart, index) {
    
}
// -> calcular o total
async function calculateTotal(userCart) {
    const result = (userCart.reduce((total, item)=> total + item.subtotal(), 0));
    console.log(result);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}