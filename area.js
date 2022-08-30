let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');
let valor = lines[0].split(' ');

let a = Number(valor[0]);
let b = Number(valor[1]);
let c = Number(valor[2]);

let areaTrianguloRetangulo = (a * c) / 2;
let areaCirculo = 3.14159 * (c*c);
let areaDoTrapezio = ((a+b)*c)/2;
let areaQuadrado = b*b;
let areaRetangulo = a*b;

console.log(`TRIANGULO: ${areaTrianguloRetangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaDoTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);