let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let salario = Number(lines[1]);
let vendas = Number(lines[2]);

let calc = vendas * 0.15;
let resultado = calc + salario;

console.log(`TOTAL = R$ ${resultado.toFixed(2)}`);