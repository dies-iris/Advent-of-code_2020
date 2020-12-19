const input = require('./input');
const test = "FBFBBFF";

const getRow = function(lettres, i, debut, fin){
    if(fin-debut === 1){
        if(lettres[i] === "F" || lettres[i] === "L"){
            return debut;
        } else {
            return fin;
        }
    }
    let half = Math.ceil((fin-debut)/2);
    if(lettres[i] === "F" || lettres[i] === "L"){
        return getRow(lettres, i+1, debut, fin-half);
    } else {
        return getRow(lettres, i+1, debut+half, fin);
    }
}
let numbers = [];
input.forEach(pass => {
    let row = getRow(pass.substr(0, 7), 0, 0, 127);
    let column = getRow(pass.substr(7, 3), 0, 0, 7);
    let seat = row * 8 + column;
    numbers.push(seat);
});
numbers.sort((a,b) => a-b);

//partie2
for(let i=0; i < numbers.length; i++){
    if(numbers[i+1] !== numbers[i]+1){
        console.log(numbers[i]+1)
    }
}
