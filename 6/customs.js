const input = require("./input");
const test = [["abc"],["a","b","c"],["ab","ac"],["a","a","a","a"],["b"]];
// FIRST PART
// const checkAnswers = (data) => {
//     let answers = [];
//     for(group of data){
//         let letters = [];
//         for(person of group){
//             for(let i = 0; i < person.length; i++){
//                 if(!letters.includes(person[i])){
//                     letters.push(person[i]);
//                 }
//             }
//         }
//         answers.push(letters.length);
//     }
//     return answers.reduce((a,b) => a+b);
// }

//SECOND PART
const checkAnswers = (data) => {
    let answersSum = 0;
    for(group of data){
        // console.log("=================");
        // console.log(group);
        let letters = group[0];
        // console.log("First person's answers : " + letters);
        if(group.length > 1){
            for(answer of group){
                // console.log("Current person's answers : " + answer);
                let goodLetters = "";
                for(let i = 0; i < answer.length; i++){    
                    if(letters.includes(answer[i])){
                        goodLetters += answer[i];
                    }
                }
                // console.log("The current person has these letters in common with previous people : " + goodLetters);
                for(let k = 0; k < letters.length; k++){
                    if(!goodLetters.includes(letters[k])){
                        letters = letters.replace(letters[k],'-');
                    }
                }
                if(letters.includes("-")){
                    letters = letters.replaceAll('-','');
                }
                
                // console.log("updated yes answers : " + letters);
            }
        }
        // console.log("Number of letters in common : " + letters.length);
        answersSum += letters.length;       
    }
    return answersSum;
}

console.log(checkAnswers(input));
