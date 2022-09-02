let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

var num = lines[0].split(' ');

var a = Number(num[0]);
var b = Number(num[1]);
var c = Number(num[2]);

function Perimetro(a,b,c){
    return (a+b+c);
}

function Area(a,b,c){
    return (((a+b)*c)/2);
}

function VerificaTriangulo(a,b,c){
    if((a<(b+c)) && (b < (a+c)) && (c<(a+b))){
        console.log(`Perimetro = ${Perimetro(a,b,c).toFixed(1)}`);
    }else{
        console.log(`Area = ${Area(a,b,c).toFixed(1)}`);
    }
}

VerificaTriangulo(a,b,c);