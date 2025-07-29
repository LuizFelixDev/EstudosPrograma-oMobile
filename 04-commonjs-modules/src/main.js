const p = require("./services/products");
const cofig = require("./services/config")

async function main(){
    // let v = [7,5,32,2,8,6,7]
    // let f = p.mergeSort(v);
    // for(i=0; i<f.length; i++){
    //     console.log(f[i]);
    // }

    // p.getFullName("890 ", " Feijão");

    console.log(cofig.devArea.production);
    console.log(cofig.client.device);
};

main();