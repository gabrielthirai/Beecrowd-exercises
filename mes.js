let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

var meses = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var i = parseInt(lines.shift());

i--;
console.log(meses[i]);