const input = require("./input");
const test = ["F10", "N3", "F7", "R90", "F11"];

const dirs = ["north","east", "south", "west"];

const waypoint = {
    north: 1,
    east: 10,
    south: 0,
    west: 0,
    dir1 : "north",
    dir2 : "east"
}
const boat = {
    north: 0,
    east: 0,
    south: 0,
    west: 0
}


input.forEach(instr => {
    let letter = instr.substring(0,1);
    let num = parseInt(instr.substring(1));
    switch(letter){
        case "L":
            let coef = num/90;
            let valuesL = dirs.map(e => waypoint[e]);
            for(let i = 0; i < coef; i++){
                valuesL.push(valuesL.shift());
            }
            dirs.forEach((dir, i) => {
                waypoint[dir] = valuesL[i];
            })
            for(let i = 0; i < coef; i++){
                dirs.unshift(dirs.pop());
            }
            waypoint.dir1 = dirs[0];
            waypoint.dir2 = dirs[1];
            break;    
        case "R":
            let coefR = num/90;
            let valuesR = dirs.map(e => waypoint[e]);
            for(let i = 0; i < coefR; i++){
                valuesR.unshift(valuesR.pop());
            }
            dirs.forEach((dir, i) => {
                waypoint[dir] = valuesR[i];
            })
            for(let i = 0; i < coefR; i++){
                dirs.push(dirs.shift());
            }
            waypoint.dir1 = dirs[0];
            waypoint.dir2 = dirs[1];
            break;
        case "N":
            waypoint.north += num;
            waypoint.south -= num;
            break;
        case "S":
            waypoint.south += num;
            waypoint.north -= num;
            break;
        case "E":
            waypoint.east += num;
            waypoint.west -= num;
            break;
        case "W":
            waypoint.west += num;
            waypoint.east -= num;
            break;
        case "F":
            boat[waypoint.dir1] += num * waypoint[waypoint.dir1];
            boat[waypoint.dir2] += num * waypoint[waypoint.dir2];
            break;
    }
    // console.log(waypoint);
    // console.log(boat);
});


console.log(Math.abs(boat.east - boat.west) + Math.abs(boat.north - boat.south));
