const test = ["nop +0","acc +1","jmp +4","acc +3","jmp -3","acc -99","acc +1","jmp -4","acc +6"];
const input = require('./input');

const breakLoop = (data) => {
    let acc = 0;
    let indices = [];
    let n = 1;
    for(let i = 0; i < data.length; i+=n){
        n = 1;
        // console.log(indices)
        if(indices.includes(i)){
            console.log("BREAK");
            break;
        } else {
            indices.push(i);
        }
        let instr = data[i].substring(0,3);
        // console.log(instr);
        let value = parseInt(data[i].substring(3));
        // console.log(value);
        if(instr === "acc"){
            acc += value;
        } else if (instr === "jmp"){
            n = value;
        }
    }
    return acc;
}

console.log(breakLoop(input));