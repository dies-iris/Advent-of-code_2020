// import input from "./input";
let input = require('./input').input();
input = input.map(el => el.split(" "));
input = input.map(el => [parseInt(el[0].split("-")[0]), parseInt(el[0].split("-")[1]), el[1][0], el[2]]);
// console.log(input[0]);
// let countPass=0;
// for(pass of input){
//     let lettre = pass[2];
//     let count = 0;
//     for(i of pass[3]){
//         if(lettre === i){
//             count++;
//         }
//     }
//     if( count >= pass[0] && count <= pass[1]){
//         countPass++;
//     }
// }
// console.log(countPass);
let countPass2=0;
for(pass of input){
    let lettre = pass[2];
    let firstPos = pass[3][pass[0]-1];
    let secondPos = pass[3][pass[1]-1];
    if( (lettre === firstPos && lettre !== secondPos )|| (lettre !== firstPos && lettre === secondPos )){
        countPass2++;
    } 
}
console.log(countPass2);