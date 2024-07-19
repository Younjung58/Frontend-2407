// String 객체

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// 메소드(Method)
console.log(hello[2], hello.charAt(2));     //'하'
console.log(hello + '여러분!', hello.concat('여러분!'));
console.log(hello.indexOf('세요'), hello.indexOf('가'));      
// 3, -1(0보다 크거나 같은 값이 나오면, 이 문자열안에 글자가 있다는 것이고 0보다 작으면 없다는 것)

console.log(hello.includes('세요'));
console.log('pineapple'.lastIndexOf('p'));      // 6

// 문자열을 분리하여 배열을 생성
let fruits = '수박 참외 포도';
let furitArray = fruits.split(' ');
console.log(furitArray);        // [ '수박', '참외', '포도' ]

// 문자열 일부분(substring)
let today = new Date().toISOString();       // 2024-07-19T02:12:23.384Z
console.log(today);
// 날짜 추출 - 2024-07-19
console.log(today.substring(0, 10));   //시작하는것은 포함 자리, 끝나는 것은 포함 안되는 다음자리로 기입
// 시간 추출 - 02:12:23
console.log(today.substring(11, 19));  // 11의 자리부터 8글자를 꺼내줄거니까, (11+8)까지,,
console.log(new Date().toLocaleString());       // 2024. 7. 19. 오전 11:20:34
console.log(new Date().toLocaleString().substring(13));       // 숫자 하나만 쓰면, 그 위치부터 끝까지 출력

// 공백 제거
let space = '\t Hello?  \r\n';      
console.log(space.trim());      // 양쪽의 White space(공백, 탭(\t), \r, \n)를 없애줌

// Method chaining
console.log(space.trim().substring(0,6).toUpperCase());

// 문자열 변환
let sample = 'A quick brown fox';
console.log(sample.replace('A', 'The'));
console.log(sample.replace('o', 'O'));      // 'A quick brOwn fox' 앞쪽에 나온 'o' 하나만 변경됨

// 정규표현식(Regular Expression)
sample = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
// 영문자와 공백만 남기고 모두 지움
console.log(sample.replace(/[^A-Z a-z]/g, '')); // /[대문자 A부터 Z까지, 소문자 a부터 z까지 아닌것을 제외하고],''지워라 ]

// 한글과 공백만 남기고 모두 지움
console.log(sample.replace(/[^가-힣 ㄱ-ㅎ ㅏ-ㅣ]/g, ''));

// 숫자, 특수기호만 남기고 모두 지움
console.log(sample.replace(/[^0-9 - =]/g, ''));