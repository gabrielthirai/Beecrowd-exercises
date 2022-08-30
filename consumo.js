let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let km = Number(lines[0]);
let litro = Number(lines[1]);

let calc = km/litro;

console.log(`${calc.toFixed(3)} km/l`);