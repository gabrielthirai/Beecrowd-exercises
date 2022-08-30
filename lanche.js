let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let valores = lines[0].split(' ');

let codigo = Number(valores[0]);
let quantidade = Number(valores[1]);

let preco;

switch(codigo){
    case 1:
        preco=4;
        break;
    case 2:
        preco=4.5;
        break;
    case 3: 
        preco=5;
        break;
    case 4:
        preco = 2;
        break;
    case 5:
        preco = 1.5;
        break;
}

let calc = preco*quantidade;

console.log(`Total: ${calc.toFixed(2)}`);