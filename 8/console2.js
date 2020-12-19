const test = ["nop +0","acc +1","jmp +4","acc +3","jmp -3","acc -99","acc +1","jmp -4","acc +6"];
const input = require('./input');

const getIndexOfBadInstruction = (data) => {
    let indices = [];
    let n = 1;
    for(let i = 0; i < data.length; i+=n){
        n = 1;
        if(indices.includes(i)){
            break;
        } 
        indices.push(i);
        let instr = data[i].substring(0,3);
        let value = parseInt(data[i].substring(3));
        if (instr === "jmp"){
            n = value;
        } 
    }
    return indices;
}

const testIfEndsLoop = (ixs, data) => {
    let acc = 0;
    for(index of ixs){
        // console.log(index + "==================");
        acc = 0;
        let indices = [];
        let n = 1;
        let dataClone = [...data];
        let prevI = 0;
        // console.log(dataClone[index]);
        if(dataClone[index].includes("jmp")){
            // console.log("Includes jmp");
            dataClone[index] = dataClone[index].replace("jmp", "nop");
        } else if (dataClone[index].includes("nop")){
            // console.log("Includes nop");
            dataClone[index] = dataClone[index].replace("nop", "jmp");
        }
        // console.log(dataClone);
        for(let i = 0; i < data.length; i+=n){
            prevI = i;
            n = 1;
            if(indices.includes(i)){
                //GETS OUT OF THE LOOP
                break;
            } else {
                indices.push(i);
            }
            let instr = dataClone[i].substring(0,3);
            // console.log(instr);
            let value = parseInt(dataClone[i].substring(3));
            // console.log(value);
            if(instr === "acc"){
                acc += value;
            } else if (instr === "jmp"){
                n = value;
            }
        }
        console.log("i + n : " + prevI+n);
        if(prevI+n >= data.length){
            // console.log("BREAK");
            break;
        }
    }
    return acc;
}

const breakLoop = (data) => {
    let indices = getIndexOfBadInstruction(data);
    console.log(indices);
    return testIfEndsLoop(indices, data);
}

console.log(breakLoop(input));