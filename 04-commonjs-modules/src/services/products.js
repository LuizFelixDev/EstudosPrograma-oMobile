// Todas as funções que lidam com produtos
async function getFullName(comId, productName) {
    console.log(comId + "--" + productName);
};

// Função principal do Merge Sort
function mergeSort(arr) {
    // Caso base: se o array tiver 1 ou nenhum elemento, ele já está ordenado
    if (arr.length <= 1) return arr;
  
    // Divide o array no meio
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);      // metade esquerda
    const right = arr.slice(middle);        // metade direita
  
    // Chamada recursiva para ordenar as metades
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // Função auxiliar para "mesclar" dois arrays ordenados
  function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
  
    // Compara os elementos dos dois arrays e adiciona o menor ao resultado
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Adiciona os elementos restantes (se houver) de cada lado
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

module.exports = {
    getFullName,
    mergeSort,
}