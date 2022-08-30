let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let numero1 = Number(lines[0]);
let numero2 = Number(lines[1]);
let numero3 = Number(lines[2]);
let numero4 = Number(lines[3]);

let dif = (numero1 * numero2) - (numero3 * numero4);

console.log(`DIFERENCA = ${dif}`);