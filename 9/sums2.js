const input = require('./input');
const test = [35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576];

const getInvalidNumber = (data, n) => {
    let num = 0;
    for(n; n < data.length; n++){
        let preambule = data.slice(n-25, n);
        preambule.sort((a,b) => b-a);
        let biggestSum = preambule[0] + preambule[1];
        let current = data[n];
        if(current > biggestSum){
            num = current;
            break;
        }
        let hasPair = false;
        for(let i = 0; i < preambule.length; i++){
            if(preambule.includes(current-preambule[i])){
                hasPair = true;
                break; 
            }   
        }
        if(!hasPair)
            num = current;
    }
    return num;
}

console.log(getInvalidNumber(input, 25));