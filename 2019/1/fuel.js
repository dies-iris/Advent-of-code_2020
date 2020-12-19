const mass = require("./input");
let fuel = 0;

const calculateFuel = (n) => {
    let result = Math.floor(n/3)-2;
    if(result > 0){
        fuel += result;
        calculateFuel(result);
    }
}

mass.forEach(m => calculateFuel(m));

console.log(fuel);