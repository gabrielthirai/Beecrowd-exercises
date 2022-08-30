let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let raio = Number(lines[0]);
const pi = 3.14159;

let area = pi*raio*raio;
console.log(`A=${area.toFixed(4)}`);