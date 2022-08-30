let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let numero1 = Number(lines[0]);
let numero2 = Number(lines[1]);

let soma = numero1 + numero2;

console.log(` SOMA = ${soma} `);