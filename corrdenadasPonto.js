var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

var num = lines[0].split(' ');

var x = Number(num[0]);
var y = Number(num[1]);


function planoCartesiano (x,y){
    if(x === 0 && y===0){
        return "Origem";
    }else if(y===0){
        return "Eixo X";
    }else if(x===0){
        return "Eixo Y";
    }else if(x > 0 && y>0){
        return "Q1";
    }else if(x<0 && y>0){
        return "Q2";
    }else if(x<0 && y<0){
        return "Q3";
    }else if(x>0 && y<0){
        return "Q4";
    }
}

console.log(planoCartesiano(x,y));