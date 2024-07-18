// 소수(prime number)판별
let num = 13;
for (let i =2; i<num; i++){
    if(num%i == 0){
        console.log(`{num}은/는 소수가 아님.`);
        break;
    }
}

function isPrimeNumber(num){
    
    for(let i=2; i<=sqrNum; i++){
        if(num%i == 0)
            return false;
    }
    // for(let i=2; i< num; i++){
    //     if(num%i == 0)
    //         return false;
    // }
    return true;
}

console.log(13, isPrimeNumber(13));
console.log(12, isPrimeNumber(12));

// 2에서부터 100까지의 소수
let isPrimeNumbers = [];
for (let i=2; i<=100; i++){
    if (isPrimeNumber(i))
        isPrimeNumbers.push(i);
}
console.log(isPrimeNumbers);