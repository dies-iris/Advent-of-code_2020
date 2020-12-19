const input = require("./input");
const test = [["mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X","mem[8] = 11","mem[7] = 101","mem[8] = 0"]];

const writeToMemory = (data) => {
    let memory = {};
    data.forEach(el => {
        let mask = el[0].substring(7);
        for(let i=1; i < el.length; i++){
            let mem = el[i].slice(4, el[i].indexOf("]"));
            // console.log(mem);
            let binary = String(toBinary(parseInt(el[i].slice(el[i].indexOf("= ")+2)), mask.length)).split('');
            // console.log(binary.join(''));
            // console.log(mask);
            for(let k = 0; k < mask.length; k++){
                if(mask[k] !== "X"){
                    binary[k] = mask[k];
                }
            }
            // console.log(binary.join(''));
            binary = parseInt(binary.join(''), 2);
            // console.log(binary);
            memory[mem] = binary;
        }
        
    });
    return Object.values(memory).reduce((a,b) => a+b);
}

function toBinary(integer, withPaddingLength) {
    let str = integer.toString(2);
    return str.padStart(withPaddingLength, "0");
}

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

console.log(writeToMemory(input));