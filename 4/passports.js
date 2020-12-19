const input = require("./input");
const example = require("./example");
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
let count = 0;
for(passport of input){
    let keys = Object.keys(passport);
    if(keys.length >= fields.length){
        let tmp = 0;
        fields.forEach(f =>{
            if(keys.includes(f)){
                tmp++;
            }
        });
        //all necessary fields are present
        if(tmp === fields.length){
            // byr (Birth Year) - four digits; at least 1920 and at most 2002.
            let byrIsValid = parseInt(passport.byr) >= 1920 && parseInt(passport.byr) <= 2002;
            // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
            let iyrIsValid = parseInt(passport.iyr) >= 2010 && parseInt(passport.iyr) <= 2020;
            // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
            let eyrIsValid = parseInt(passport.eyr) >= 2020 && parseInt(passport.eyr) <= 2030;
            // hgt (Height) - a number followed by either cm or in:
            let hgtIsValid = passport.hgt.match(/(^[0-9]{2,3}(cm|in))$/g);
            // If cm, the number must be at least 150 and at most 193.
            // If in, the number must be at least 59 and at most 76.
            if(hgtIsValid){
                let metrics = passport.hgt.substring(passport.hgt.length-2);
                let hgt = parseInt(passport.hgt.substring(0, passport.hgt.length-2));
                if((metrics === "cm" && hgt >= 150 && hgt <= 193) || (metrics === "in" && hgt >= 59 && hgt <= 76)){
                    hgtIsValid = true;
                } else {
                    hgtIsValid = false;
                }
            }
            // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
            let hclIsValid = passport.hcl.match(/^#([0-9a-f]){6}$/g);
            // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
            let eclIsValid = passport.ecl.match(/^amb|blu|brn|gry|grn|hzl|oth$/g);
            // pid (Passport ID) - a nine-digit number, including leading zeroes.
            let pidIsValid = passport.pid.match(/^[0-9]{9}$/g);
            if(byrIsValid && iyrIsValid && eyrIsValid && hgtIsValid && hclIsValid && eclIsValid && pidIsValid){
                // console.log(Object.values(passport)  + " Valid");
                count++;
            } else {
                // console.log(Object.values(passport) + " Invalid");
            }
        }
    }
}

console.log(count);