let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

var n = parseInt(lines.shift());
var x=0,y=0;
var arr = new Array(n);
for(let i = 0; i < arr.length; i++){
    arr[i] = parseInt(lines.shift());

    if(arr[i] >= 10 && arr[i]<=20){
        x++;
    }else{
        y++;
    }
}

console.log(`${x} in`);
console.log(`${y} out`);