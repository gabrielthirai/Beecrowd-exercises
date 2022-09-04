let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

var num = lines[0].split(' ');

var x = Number(num[0]);
var y = Number(num[1]);

var time = 0;

function verificaTempo(a,b){
    if(a<b){
        time = b-a;
        console.log(`O JOGO DUROU ${time} HORA(S)`);
    }else if(a>b){
        time = 24-(a-b);
        console.log(`O JOGO DUROU ${time} HORA(S)`);
    }else if(a==b){
        time = 24;
        console.log(`O JOGO DUROU ${time} HORA(S)`);
    }
}
verificaTempo(x,y);