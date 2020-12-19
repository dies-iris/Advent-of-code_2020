const input = require('./input').input();
const test = ["..##.......","#...#...#..",".#....#..#.","..#.#...#.#",".#...##..#.","..#.##.....",".#.#.#....#",".#........#","#.##...#...","#...##....#",".#..#...#.#"];

const getTrees = (input,plusX, plusY) => {
    const lastIndex = input[0].length-1;
    let count = 0;
    let x = 0;
    for (let i = plusY; i < input.length; i += plusY){
        x += plusX;
        if(x > lastIndex){
            x -= lastIndex+1;
        }
        let row = input[i];
        // console.log(row + " " + i + " " + x + " " + row[x]);
        if(row[x] === "#"){
            count ++;
        }
    }
    return count;
}
const pistes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
let result = 1;
pistes.forEach(piste => {
    let trees = getTrees(input, piste[0], piste[1]);
    console.log(trees);
    result *= trees;
})
console.log(result);
console.log(input.length);