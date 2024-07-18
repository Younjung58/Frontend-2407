// 최소값, 최대값 찾기

let arr = [45, 3, 27, 89, 6, 24];

let minVal = 100, maxVal = 0;
for (let num of arr) {
    if (num < minVal) {
        minVal = num;
    }
    if (num > maxVal){
        maxVal = num;
    }
    console.log(`과정: ${num}, 최소값: ${minVal}, 최대값: ${maxVal}`);
}
console.log(`최소값: ${minVal}, 최대값: ${maxVal}`);

function myMin(...arr) {
    let minVal = Number.MAX_SAFE_INTEGER;       //1억정도의 값임(정수 연산시의 제일 큰 수)
    for (let num of arr)
        if (num < minVal)
            minVal=num;
    return minVal;
}
function myMax(...arr){
    let myMax = Number.MIN_SAFE_INTEGER;        //정수 연산시의 제일 작은 수
    for(let num of arr)
        if(num>myMax)
            myMax=num;
    return myMax;
}
// console.log(myMin(arr), myMax(arr));  ->이경우는 위에 function myMin(arr) / function myMax(arr)
console.log(myMin(45, 67, 3, 25, 88, 19),myMax(45, 67, 3, 25, 88, 19));