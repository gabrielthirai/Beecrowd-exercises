let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let N = Number(lines[0]);


let anos = Math.trunc(N / 365);
let meses = Math.trunc((N % 365) / 30);
let dias = Math.trunc(N % 365 % 30);



console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);