// 생년월일에 따른 나이 계산

const bYear = 2000, bMonth = 7, bDay = 16;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;
let tDay = today.getDate();

// 현재월이 생월보다 작은 경우
//if (tMonth < bMonth)
//  age = tYear - bYear - 1;
// 현재월이 생월보다 큰 경우
// else if (tMonth > bMonth)
//  age = tYear - bYear;
// 현재월이 생월보다 같은 경우 - 현재일과 생일을 비교 bDay <= tDay ? tYear-bYear : tYear-bYear-1
// else{
//     if (tDay >= bDay)

let age 
= bMonth<tMonth ? tYear-bYear : bMonth>tMonth ?  tYear-bYear-1 : bDay <= tDay ? tYear-bYear : tYear-bYear-1;

console.log(`생일: ${bYear}-${bMonth}-${bDay}, 나이: ${age}`);