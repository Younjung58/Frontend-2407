// 사분면 - 백준도장 14681

let x = Math.ceil(Math.random() * 20);          // x, y는 1~20의 값을 가짐
let y = Math.ceil(Math.random() * 20);
x *= Math.random() > 0.5 ? 1 : -1;      // 절반은 양수, 절반은 음수의 값을 가짐.
y *= Math.random() > 0.5 ? 1 : -1;
let Q = '';

if(x>0 && y>0)
    Q = '1';
    else if(x>0 && y<0)
        Q = '4';
    else if(x<0 && y>0)
        Q = '2';
    else if(x<0 && y<0)
        Q = '3';
    else
        Q = '좌표축';

console.log(`점 (${x},${y})는 ${Q}사분면이다.`);

