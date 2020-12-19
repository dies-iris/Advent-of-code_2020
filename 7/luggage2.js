var input = require("./input");
// var input = require("./test");
// var input = require("./test2");
input = input.map(el => el.split(" contain "));
input = input.map(el => el.map(e => e.split(", ")));
input = input.map(el => [el[0][0].replace(/.bag(s*)/g,''), el[1].map(e => e.replaceAll(/.bag(s*)\.*/g, ''))]);
// console.log(input[1][0]);
// console.log(input[1][1]);
var inputObj = {};
for(rule of input){
    inputObj[rule[0]] = {};
    var innerBags = rule[1];
    for(nColoredBags of innerBags){
        if(nColoredBags !== "no other"){
            let sep = nColoredBags.indexOf(" ");
            let nBags = parseInt(nColoredBags.substring(0,sep));
            let bagColor = nColoredBags.substring(sep+1);
            inputObj[rule[0]][bagColor] = nBags;
            // console.log(bagColor); 
        } else {
            inputObj[rule[0]] = 0;
        }
        
    }
}
// console.log(Object.keys(inputObj["shiny gold"]));
let nInnerBags = 0;
const calculateInnerBags = (vcolor, n) => {
    let currentBag = inputObj[vcolor];
    if(currentBag !== 0){
        // console.log(Object.values(currentBag));
        // let cumul = n * Object.values(currentBag).reduce((a,b) => a+b)
        nInnerBags +=  n * Object.values(currentBag).reduce((a,b) => a+b);
        for(color of Object.keys(currentBag)){
            calculateInnerBags(color, inputObj[vcolor][color]*n);
        }
    }
}
calculateInnerBags('shiny gold', 1);
console.log(nInnerBags);