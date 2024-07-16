/*
 *       if()
 *      else if()
 *      ...
 *      else
 */
// score
let score = Math.ceil(Math.random() * 60) + 40;     //41~100사이의 정수
let grade = '';

if (score >= 90)        //제일 위에가 무조건 제일 작은 범위의 조건이 와야함
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >=60)
    grade = 'D';
else 
    grade = 'F';

console.log(`점수 : ${score}, 학점 : ${grade}`);

// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어지면 Buzz, 5와 7 둘다 나누어지면 FizzBuzz
// 위의 경우가 아니면 숫자를 출력
let num = Math.ceil(Math.random() * 10000);
let result = '';

if (num % 35 == 0)          // if(num % 5 == 0 && num % 7 == 0)와 같음(가장 작은 범위의 조건이기에 제일 먼저 나와야함)
    result = 'FizzBuzz';
else if (num % 5 == 0)
    result = 'Fizz';
else if (num % 7 == 0)
    result = 'Buzz';
else 
    result = num;

console.log(`숫자는 ${num}이고, 결과는 ${result}입니다.`);