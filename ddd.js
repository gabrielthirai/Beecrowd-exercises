let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let num = Number(lines[0]);

function verificaDDD(x){
    if(x === 61){
        console.log(`Brasilia`);
    }else if(x===71){
        console.log(`Salvador`);
    }else if(x===11){
        console.log(`Sao Paulo`);
    }else if(x===21){
        console.log(`Rio de Janeiro`);
    }else if(x===32){
        console.log(`Juiz de Fora`);
    }else if(x===19){
        console.log(`Campinas`);
    }else if(x===27){
        console.log(`Vitoria`);
    }else if(x===31){
        console.log(`Belo Horizonte`);
    }else{
        console.log(`DDD nao cadastrado`);
    }
}

verificaDDD(num);