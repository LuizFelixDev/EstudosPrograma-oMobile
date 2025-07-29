// Todas as funções que lidam com produtos

//hidden function
async function  doBreakLine() {
  console.log("\n");
}
async function getFullName(comId, productName) {
    await doBreakLine();
    console.log(comId + "--" + productName);
};

//hidden const
const apiURL = {
  url: "www.google.com/api"
}

// Função principal do Merge Sort
function mergeSort(arr) {
  if (!Array.isArray(arr)) {
      console.error("mergeSort recebeu algo que não é um array:", arr);
      return [];
  }

  if (arr.length <= 1) {
      return arr;
  }

  const meio = Math.floor(arr.length / 2);
  const esquerda = mergeSort(arr.slice(0, meio));
  const direita = mergeSort(arr.slice(meio));

  return merge(esquerda, direita);
}

function merge(left, right) {
  if (!Array.isArray(left) || !Array.isArray(right)) {
      console.error("merge recebeu valores inválidos:", { left, right });
      return [];
  }

  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
      } else {
          result.push(right[j]);
          j++;
      }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = {
  mergeSort,
  merge
};


module.exports = {
    getFullName,
    mergeSort,
}