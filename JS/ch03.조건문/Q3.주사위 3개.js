// 주사위 3개 - 백준도장 2480

let a = Math.ceil(Math.random() * 6); 
let b = Math.ceil(Math.random() * 6); 
let c = Math.ceil(Math.random() * 6); 
let m = '';
let p = a>b&&a>c ? a : b>a&&b>c ? b : c;        //Math.max(a,b,c)의 함수를 사용하면 이중에서 최대값을 구해줌.

if(a==b && b==c)                //a==b&&b==c는 모든 겨우에서 가능, a==b==c이런꼴은 파이썬과 자바스크립트에서만 가능 
    m = 10000+a*1000;
else if(a==b && b!=c)          // 이걸 그냥 a==b로만 써도, 위의 b==c의 조건과는 반대이기 때문에 자동으로 b!=c가 됨
    m = 1000+a*100;
else if(a==c && c!=b)           //else if(a==b||a==c)와 else if(b==c)이렇게 두 항목으로 줄여서 표현 가능.
    m = 1000+a*100;
else if(b==c && c!=a)
    m = 1000+b*100;
else 
    m = p*100;
// 같은 눈 3개
// 같은 눈 2개
// 모두 다른눈이면, 가장 큰 값

// 마지막 else항목을 max를 사용하여 나타내면,
// let max = a>b ? a:b;
// max = max>c ? max : c;
// m = 100*max;
// 을 사용해서 나타낼 수 있음

console.log(`주사위의 값은 ${a},${b},${c}이고, 상금은 ${m}원 입니다.`);