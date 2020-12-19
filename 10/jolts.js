const input = require('./input');
const test = [16,10,15,5,1,11,7,19,6,12,4];
const test2 = [28,33,18,42,31,14,46,20,48,47,24,23,49,45,19,38,39,11,1,32,25,35,8,17,7,9,4,2,34,10,3];

const getJolts = (data) => {
    let dataClone = [...data];
    dataClone.sort((a,b) => a-b);
    dataClone.push(dataClone[dataClone.length-1]+3);
    dataClone.unshift(0);
    // let dif1 = 0;
    // let dif3 = 0;
    // let prev = 0;
    // dataClone.forEach(el => {
    //     el-prev === 1 ? dif1++ : el-prev === 3 && dif3++; 
    //     prev = el;
    // })
    // initialize with 1 for the first and 0 for the rest
    let ways = dataClone.map((x, i) => (i == 0 ? 1 : 0));

    for (let i = 0; i < ways.length; i++) {
        for (let j = i - 3; j < i; j++) {
            // add ways using previous 3 numbers
            if (dataClone[i] <= dataClone[j] + 3) {
            ways[i] += ways[j];
            }
        }
    }
    return ways[ways.length - 1];
}


console.log(getJolts(input));
