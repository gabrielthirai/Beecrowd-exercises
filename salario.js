let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let numeroDoFuncionario = Number(lines[0]);
let horasTrabalhadas = Number(lines[1]);
let valorPorHora = Number(lines[2]);

let salario = horasTrabalhadas * valorPorHora;

console.log(`NUMBER = ${numeroDoFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);