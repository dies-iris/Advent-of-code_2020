const input = require('./input');
const test = [35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576];

const getInvalidNumber = (data, n) => {
    let num = 0;
    for(n; n < data.length; n++){
        let preambule = data.slice(n-25, n);
        preambule.sort((a,b) => b-a);
        // console.log(preambule);
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
let invalidNumber = getInvalidNumber(input, 25);
let invalidNumberTest = getInvalidNumber(test, 5);

const getSum = (n, data) => {
    let arr = data.slice(0, data.indexOf(n));
    let nums = [];
    for(let i = 0; i < arr.length; i++){
        nums = [];
        nums.push(arr[i]);
        for(let k = 1; k < arr.length-i; k++){
            nums.push(arr[i+k]);
            if(nums.reduce((a,b) => a+b) >= n){
                break;
            }
        }
        if(nums.reduce((a,b) => a+b) === n){
            break;
        }
    }
    nums.sort((a,b) => a-b);
    return nums[0]+nums[nums.length-1];
}

console.log(getSum(invalidNumber, input));