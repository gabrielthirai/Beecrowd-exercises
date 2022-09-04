let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

var pi = 3.14159;
var vol = (4/3);

var r = parseFloat(lines.shift());
var total = vol * pi * Math.pow(r, 3);

console.log(`VOLUME = ${total.toFixed(3)}`);