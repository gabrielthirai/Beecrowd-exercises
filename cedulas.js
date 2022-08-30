let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let valor = Number(lines[0]);

const cedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for(let nota of cedulas){
    let quantidadeCedulas = parseInt(valor/nota);
    console.log(`${quantidadeCedulas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}