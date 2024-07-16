// 현재 날짜 및 시간을 아는 방법
let today = new Date();
console.log(today);         // 2024-07-16T01:08:17.631Z, Time Zone기준으로 나옴(우리나라는 +9)
let hour = today.getHours();
console.log(hour);          // 10
console.log(new Date().getHours());         //10

if (hour < 12)
    console.log(`오전 ${hour}시 ${today.getMinutes()}분 입니다.`);
else
    console.log(`오후 ${hour - 12}시 ${today.getMinutes()}분 입니다.`);  //hour가 0~23의 숫자로 나오기 때문

console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);        // JS에서 Month는 1 적게 나오기 때문에 +1 해줘야함
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);