let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let number = parseInt(lines.shift());
let soma = 0;
let contador = 0;

while(true){
  if(number == 0){
    break;
  }
  else{
    let temp = number;
    while(contador < 5){
      if(temp % 2 == 0){
        soma += temp;
        contador++;
        temp++;
      }
      else{
        temp++;
      }
    }
    console.log(`${soma}`);    
    number = parseInt(lines.shift());
    contador = 0;
    soma = 0;
  }
}