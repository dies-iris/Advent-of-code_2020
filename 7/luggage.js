var input = require("./input");
// var input = require("./test");
input = input.map(el => el.split(" contain "));
input = input.map(el => el.map(e => e.split(", ")));
input = input.map(el => [el[0][0].replace(/.bag(s*)/g,''), el[1].map(e => e.replaceAll(/(^[0-9]{1,2}.)|(.bag(s*)\.*)/g, ''))]);
console.log(input[1][0]);
console.log(input[1][1]);
let outerBagColors = [];
const findOuterBagsFor = (colorsArr, data) => {
    let addedColors = [];
    for(color of colorsArr){
        for(rule of data){
            var outerBag = rule[0];
            var innerBags = rule[1];
            if(innerBags.includes(color) && !outerBagColors.includes(outerBag) ){
                outerBagColors.push(outerBag);
                addedColors.push(outerBag);
            }
        }
    }
    if(addedColors.length > 0){
        findOuterBagsFor(addedColors, data);
    }
}
findOuterBagsFor(['shiny gold'], input);
console.log(outerBagColors.length);



