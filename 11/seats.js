const input = require("./input");
const test = ["L.LL.LL.LL","LLLLLLL.LL","L.L.L..L..","LLLL.LL.LL","L.LL.LL.LL","L.LLLLL.LL","..L.L.....","LLLLLLLLLL","L.LLLLLL.L","L.LLLLL.LL"];
const test2 = [".......#.","...#.....",".#.......",".........","..#L....#","....#....",".........","#........","...#....."];
const test3 = [".............", ".L.L.#.#.#.#.", "............."];
const test4 = [".##.##.","#.#.#.#","##...##","...L...","##...##","#.#.#.#",".##.##."];

const occupySeats = (data) => {
    let dataClone = [];
    data.forEach((row,k) => {
        let newrow = "";
        for(let i = 0; i < row.length; i++){
            //sum of # around
            // let sum = calculerAutour(data, i, k, "#");
            let sum = trouverFirstSeat(data, i, k, "#");
            if(row[i] === "L" && sum <= 0)
                newrow += "#";
            else if (row[i] === "#" && sum >= 5) //4 in the first part
                newrow += "L"; 
            else
                newrow += row[i];
        }
        dataClone.push(newrow);
    })
    return dataClone;
}

const calculerAutour = (data, x, y, sym) => {
    let sum = 0;
    for (let dy = -1; dy <= 1; dy++)
        for (let dx = -1; dx <= 1; dx++) 
            if (data[y+dy] && data[y+dy][x+dx] && data[y+dy][x+dx] === sym && !(dy===0 && dx === 0))
                sum++;
    return sum;
}

const trouverFirstSeat = (data, x, y) => {
    let sum = 0;
    for (let dy = -1; dy <= 1; dy++){
        for (let dx = -1; dx <= 1; dx++){ 
            let dirV = dy;
            let dirH = dx;
            while(true){
                if((dirV===0 && dirH === 0) || !data[y+dirV] || !data[y+dirV][x+dirH])
                break;
                if (data[y+dirV][x+dirH] === "L"){
                    break;
                }
                if (data[y+dirV][x+dirH] === "#"){
                    sum++; 
                    break;
                }
                dirV += dy;
                dirH += dx;
            }
        }
    }    
    return sum;
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

let data = [...input];
while(true){
    if(arraysEqual(data, occupySeats(data)))
        break;
    else
        data = occupySeats(data);
}

let sumSeats = 0;
data.forEach(row => sumSeats += row.split("#").length-1 );
console.log(sumSeats);
// console.log(trouverFirstSeat(test2, 3, 4))
// console.log(trouverFirstSeat(test3, 1, 1))
// console.log(trouverFirstSeat(test4, 3, 3))
