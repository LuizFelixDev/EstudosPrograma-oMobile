import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(chalk.bgBlack.green(logSymbols.success,"Sercidor iniciado com sucesso!"));

console.log(chalk.bgBlack.red(logSymbols.error, "Servidor com problema!"))

// console.log(chalk.red.bgBlack.italic('Hello world!'));
// console.log(chalk.blue.bgBlack.italic('I`m Sonic X'));