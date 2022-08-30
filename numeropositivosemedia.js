let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');


let num = 0;
let N;
let calc = 0;

for(let i=0; i<=6; i++){
    N = Number(lines[i]);
    if(N > 0){
        num++;
        calc = calc + N;
    }
}
let media = calc/num;

console.log(`${num} valores positivos`);
console.log(`${media}`);