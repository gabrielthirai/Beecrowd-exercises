let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let linha1 = lines[0].split(' ');
let linha2 = lines[1].split(' ');

let x1 = Number(linha1[0]);
let y1 = Number(linha1[1]);

let x2 = Number(linha2[0]);
let y2 = Number(linha2[1]);

function calcx(x1, x2){
    return x2-x1;
}

function calcy(y1,y2){
    return y2-y1;
}

const expoente = 2;

let x = Math.pow(calcx(x1,x2), expoente);
let y = Math.pow(calcy(y1,y2), expoente);

let distancia = Math.sqrt(x + y);

console.log(`${distancia.toFixed(4)}`);