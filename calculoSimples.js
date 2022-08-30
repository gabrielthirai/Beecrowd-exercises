let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');
let peca1 = lines[0].split(' ');
let peca2 = lines[1].split(' ');

let numero1 = peca1[1];
let valor1 = peca1[2];
let numero2 = peca2[1];
let valor2 = peca2[2];

let pagar = (numero1 * valor1) + (numero2 * valor2);

console.log(`VALOR A PAGAR: R$ ${pagar.toFixed(2)}`);
