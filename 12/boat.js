const input = require("./input");
const test = ["F10", "N3", "F7", "R90", "F11"];
const dirs = ["east", "south", "west", "north"];
const coord = {
    east: 0,
    south: 0,
    west: 0,
    north: 0,
    dir : "east",
    angle: 0,
}


input.forEach(instr => {
    let letter = instr.substring(0,1);
    let num = parseInt(instr.substring(1));
    console.log(letter, num);
    switch(letter){
        case "L":
            coord.angle += num;
            let coef = num/90;
            let indexDir = dirs.indexOf(coord.dir)-coef;
            coord.dir = indexDir < 0 ? dirs[4+indexDir] : dirs[indexDir];
            break;
        case "R":
            coord.angle -= num;
            let coef2 = num/90;
            let indexDir2 = dirs.indexOf(coord.dir)+coef2;
            coord.dir = indexDir2 > 3 ? dirs[indexDir2-4] : dirs[indexDir2];
            break;
        case "F":
            coord[coord.dir] += num;
            break;
        case "N":
            coord.north += num;
            break;
        case "S":
            coord.south += num;
            break;
        case "E":
            coord.east += num;
            break;
        case "W":
            coord.west += num;
            break;
    }
    console.log(coord);
});


console.log(Math.abs(coord.east - coord.west) + Math.abs(coord.north - coord.south));
