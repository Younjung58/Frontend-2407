/*
*자바스크립트의 자료형
*/

// 1. 문자열(String)
console.log("He said 'I love you.'");
console.log('He said "I love you."');
console.log("I'll be back.");

// 특수 문자 - 백슬래시(\) + 문자
console.log("\tabc\tdef\"ghi\njkl\\");

// 문자열 연산자(+)
console.log('가나다' + ' ' + '라마바');

// 문자열 선택
let hello = '안녕하세요?';
console.log(hello, hello[0], hello[3]);   //안녕하세요? 안 세

// 문자열 길이
// 문자열: 속성(attribute), method
console.log(hello.length, hello.charAt(0), hello.charAt(3));  // 6 안 세

// template literal
console.log(hello + '문자열의 길이는' + hello.length + '입니다.');
console.log(`${hello} 문자열의 길이는 ${hello.length} 입니다.`);

// 2. 숫자(Number)
// 자바스크립트에서는 정수형(integer), 실수형(floating point)을 구분하지 않는다.
let a = 3, b = 4;
console.log(a+b, a-b, a*b, a/b, b%a);
let pi = 0.314159e1;        // 0.314519 x 10 ** 1(10의 1승)
let f = 1.3e-8;         // 1.3 x 10 ** -8(10의 -8승)
console.log(pi, f);
console.log(2 ** 10, 2 ** 20, 2 ** 30);     //1키로(K)(2의 10승) 1메가(M)(2의 20승) 1기가(G)(2의 30승)

// 3. 논리형(Boolean) - true, false
console.log(a > b, 10 === 10.0);        // === : 타입과 값이 같을 때 참, JavaScript에서는 정수형 실수형을 구분하지 않아서 참
console.log(10 == '10', 10 === '10');     // true(==는 문자열의 값이 숫자와 같으면 참), false(===는 문자와 숫자로, 타입이 다르기 때문에 거짓임)
// 논리 연산
let x = 10;
console.log(x>8 || x<0);        // true
console.log(x>0 && x<8);        // false


// 자료형 검사
console.log(typeof hello, typeof(a), typeof(true));     // string, number, boolean

let y = a + -b;     // +는 binary operator, -는 unary operator임