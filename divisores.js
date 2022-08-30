let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let n = Number(lines[0]);

for(let i = 0; i <= 100; i++){
    if(n%i === 0){
        console.log(`${i}`);
    }
}