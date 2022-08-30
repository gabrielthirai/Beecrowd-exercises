let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let num = 0;
for(let i=0; i<=6; i++){
    if(Number(lines[i]) > 0){
        num++;
    }
}
console.log(`${num} valores positivos`);