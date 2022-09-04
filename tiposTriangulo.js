let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

var num = lines[0].split(' ');

var a = Number(num[0]);
var b = Number(num[1]);
var c = Number(num[2]);

function verificaTipo (a,b,c){
    if(a >= (b+c) || b>= (a+c) || c >= (a+b)){
        console.log(`NÃO FORMA TRIANGULO`);
    }
   else if(a*a == (b*b + c*c) || b*b == (a*a + c*c) || c*c == (a*a + b*b)){
        console.log(`TRIANGULO RETANGULO`);
   }
   else if(a*a > (b*b + c*c) || b*b > (a*a + c*c) || c*c > (a*a + b*b)){
        console.log(`TRIANGULO OBTUSANGULO`);
   }
   else if(a*a < (b*b + c*c) || b*b < (a*a + c*c) || c*c < (a*a + b*b)){
        console.log(`TRIANGULO ACUTANGULO`);
   }
   if(a == b && a == c){
        console.log(`TRIANGULO EQUILATERO`);
   }
   if((a == b && a != c)  || (a == c && a != b) || (b == c && b != a)){
        console.log(`TRIANGULO ISOSCELES`);
   }
}

verificaTipo(a,b,c);