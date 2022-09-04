let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

var x = parseFloat(lines.shift());

if (x <= 2000.00)
{
    console.log("Isento");
}
else if (x <= 3000.00)
{
    x -= 2000.00;
    x *= 0.08;
    console.log(`R$ ${x.toFixed(2)}`);
}
else if (x <= 4500.00)
{
    x -= 3000.00;
    x *= 0.18;
    x += (1000 * 0.08);
    console.log(`R$ ${x.toFixed(2)}`);
}
else
{
    x -= 4500.00;
    x *= 0.28;
    x += (1500 * 0.18) + (1000 * 0.08);
    console.log(`R$ ${x.toFixed(2)}`);
}