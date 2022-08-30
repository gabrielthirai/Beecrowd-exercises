let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let distancia = Number(lines[0]);

let carroX = 60;
let carroY = 90;

let calc = (60*distancia)/30;

console.log(`${calc} minutos`);