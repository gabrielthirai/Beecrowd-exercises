let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let num = Number(lines[0]);

function verificaIntervalo (num){
    if(num >= 0 && num<= 25.00){
        return "Intervalo [0,25]";
    }else if(num >= 25.01 && num <= 50.00){
        return "Intervalo (25,50]";
    }else if(num >= 50.01 && num <= 75.00){
        return "Intervalo (50,75]";
    }else if(num >= 75.01 && num <= 100){
        return "Intervalo (75,100]";
    }else{
        return "Fora de intervalo";
    }
}

console.log(`${verificaIntervalo(num)}`);