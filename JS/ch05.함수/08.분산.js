// sumOfSqarue -> [1,2,3,4] -> 1^2+2^2+3^2+4^2
// sqareOfSum -> [1,2,3,4] -> (1+2+3+4)^2


let sum = 0;

function sumOfSqure(arr){
    for(let num of arr)
        sum+=(num * num);
    return sum;
}

function squareOfSum(arr){
    let sum=0;
    for(let num of arr)
        sum+=num;
    return sum*sum;
}  
let arr = [1,2,3,4,5];
console.log(sumOfSqure(arr),squareOfSum(arr));

let variance = sumOfSqure(arr) / arr.length - squareOfSum(arr) / arr.length  ** 2;
console.log(variance);