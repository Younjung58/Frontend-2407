// 표준 내장 객체 - Number
let num = 273;
let numberFromConstructor = new Number(273);        // 객체로부터 숫자를 가져올 수 있음
console.log(num, numberFromConstructor);

const pi = Math.PI;
console.log(pi);
console.log(pi.toFixed(5));             // *반올림하여 소수점이하 5자리까지 나타내라(3.14159)*
console.log((1000*pi).toExponential());     // 3.141592653589793e+3
console.log(pi.toPrecision(3));         // *3.14, 유효숫자 3자리*

console.log(Number.MAX_VALUE, Number.MIN_VALUE);   // 여기서 작은 숫자는 양수중 작은 숫자 0.00...(0이 324개)(0에 가장 가까운 수)
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);       // 2의 53승 -1(9007199254740991)
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);        // -Infinity Infinity

// NaN (Not a Number)
let a = parseInt('string');
console.log(Number.isNaN(a));

console.log(Number.isFinite(9007199254740991), Number.isFinite(Infinity));