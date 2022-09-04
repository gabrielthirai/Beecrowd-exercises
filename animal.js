let input = require('fs').readFileSync('entrada.txt', 'utf-8');
let lines = input.split('\n');

let x = String(lines[0]);
let y = String(lines[1]);
let z = String(lines[2]);

function verificaAnimal(x,y,z){
    if(x === 'vertebrado'){
        if(y === 'ave'){
            if(z==='carnivoro'){
                console.log(`aguia`);
            }else if(z==='onivoro'){
                console.log(`pomba`);
            }
        }else if(y==='mamifero'){
            if(z==='onivoro'){
                console.log(`homem`);
            }else if(z==='herbivoro'){
                console.log(`vaca`);
            }
        }
    }else if(x==='invertebrado'){
        if(y==='inseto'){
            if(z==='hematofago'){
                console.log(`pulga`);
            }else if(z==='herbivoro'){
                console.log(`lagarta`);
            }
        }else if(y==='anelideo'){
            if(z==='hematofago'){
                console.log(`sanguessuga`);
            }else if(z==='onivoro'){
                console.log(`minhoca`);
            }
        }
    }

}
verificaAnimal(x,y,z);