let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let N = Number(lines[0]);


let horas = Math.trunc(N / 3600);
let minutos = Math.trunc((N % 3600) / 60);
let segundo = Math.trunc(N%60);



console.log(`${horas}:${minutos}:${segundo}`);