/*
*상수(Constant)와 변수(Variable)
*/

// 상수
const PI = 3.14159;
let radius = 10;
console.log(`반지름이 ${radius}인 원의 둘레는 ${2 * PI * radius}, 면적은 ${PI * radius**2} 입니다.}`);

// PI = 3.1415926535;       // 상수에 값을 할당하면 에러 발생

// 변수 - 전역변수(var)-전범위에서 유효한 변수, 로컬변수(let)-함수안에서, 짧은 범위 안에서 유효한 변수
// radius = 5;     //변수는 프로그램 안에서 값이 바뀔 수 있음->값을 새롭게 바꿔도 에러 발생하지 않음
// let radius = 3;      //let을 이용하여 변수 값을 한번 줬기 때문에 이경우는 불가능

function area(){
    let radius = 5;
    return PI*radius**2;            //이 경우는 로컬 변수이기 때문에 사용 가능함
}

// 복합 대입 연산자
let a = 0, str = '';
a += 1; a += 2; a += 3;         // a = a+1;
console.log(a);
str += 'A quick brown fox';     // str = str + 'A quick brown fox'
str += 'jumps over the lazy dog.';
console.log(str);

// 증감 연산자
let x = 0, y = 0;
console.log(x++, ++y);      // post-increment(조회 후 1증가), pre-increment(조회 전 1증가)
console.log(x, y);
console.log(x--, --y);      // post-decrement, pre-decrement
console.log(x, y);

// 4. undefined 자료형
console.log(typeof(abc));       //선언한 값이 없기 때문에 undefined로 도출

let c;
console.log(typeof(c));         //값을 할당하지 않았거나, 초기화하지 않은 경우의 변수는 undefined로 도출

// 자료형 변환
console.log(Number('123'), parseInt('123'), typeof Number('123'));     //노란값으로 결과가 나오면 정수를 의미, 검정색은 문자열을 의미
console.log(String(123), typeof String(123));
console.log(Boolean(1), typeof Boolean(1));
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined));       // 이 4가지 경우만 false임, 나머지는 true (Boolean([]), Boolean({}))

// 자동 자료 변환
console.log("ABC" + 100 + true);        //100과 Boolean이 문자열로 자동변환됨(더 많이 표현할 수 있는 쪽으로 변환됨, 문자열이 가장 많은 표현 가능)
console.log(100 + true);        //Boolean보다 100인 숫자가 더 많은 것을 표현 할 수 있음 -> 100+1 이므로 '101'로 결과도출
console.log(typeof !!x);

// 인치를 센치로 변환
let inch = '32';
console.log(2.54*Number(inch));