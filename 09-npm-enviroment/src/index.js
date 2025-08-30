import { connectToDataBase } from "./database/data.js";

async function main() {
    await connectToDataBase("luiz", "filho de chiquinho");
};

main();