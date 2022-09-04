let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');
var x=0, y=0, cont=0, z=0.0;
var vetor = new Array(6);

for (let i = 0; i < vetor.length; i++)
{   
    vetor[i]=parseFloat(lines.shift());

    if(vetor[i] > z)
    {
        x = parseFloat(x + vetor[i]);
        cont++;
        y = parseFloat(x/cont);
    }
}

console.log(`${cont} valores positivos`);
console.log(`${y.toFixed(1)}`);