let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');


let hora = Number(lines[0]);
let velocidadeMedia = Number(lines[1]);

let calc = (hora*velocidadeMedia) /12;

console.log(`${calc.toFixed(3)}`);