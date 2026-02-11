//sum of natural numbers using recursion


function rec(num,sum){
     if(num<=0){
        
        return sum;
     }
     sum+=num;
     return rec(num-1,sum);
}

console.log(rec(10,0));



//cm to inches
//inches to cm



function convert(fn,val){
   return  fn(val);
}
function centimetertoInches(val){
       return 2.54*val;
}
console.log(convert(centimetertoInches,10));


function convert(fn,val){
   return  fn(val);
}
function Inchestocentimeter(val){
       return val/2.54
}
console.log(convert(Inchestocentimeter,10));


//

function processArray(arr) {
    let numSum = 0;
    let boolValue = false;
    let strResult = [];

    arr.forEach(item => {
        if (typeof item === "number") {
            numSum += item;
        } 
        else if (typeof item === "boolean") {
            boolValue = item;
        } 
        else if (typeof item === "string") {
            strResult.push(...item); // spread each character
        }
    });

    return {
        num: numSum,
        str: strResult,
        bool: boolValue
    };
}

console.log(processArray([2, 4, "heelo", "krishna", true]));
