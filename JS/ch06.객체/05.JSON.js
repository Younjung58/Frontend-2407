// JSON - JavaScript Object Notation
// 이기종 컴퓨터간에 데이터를 주고 받는 표준 - XML(Extensible Markup Language)
// 실제는 json이 업계 표준임(de facto standard)

let name = 'James', age= 27, job = '프로그래머';
let person = {name: name, age: age, job: job};
let newPerson = {name, age, job};        // key이름과 변수명이 같으면 하나만 사용가능
console.log(person, newPerson);

let externalForm = JSON.stringify(person);      // 외부로 나갈때(stringify)
console.log(externalForm);

let internalForm = JSON.parse(externalForm);    // 외부에서 받아들일때(parse)
console.log(internalForm);

let personArray = [person, {name: 'Maria', age: 25, job: '디자이너'}];
console.log(JSON.stringify(personArray));  // [{"name":"James","age":27,"job":"프로그래머"},{"name":"Maria","age":25,"job":"디자이너"}]
console.log(personArray);

// p = 
// [
//   { id: 1, name: 'James', age: 27, job: '프로그래머' },
//   { id: 2, name: 'Maria', age: 25, job: '디자이너' }
// ]
// ->  이름, 나이, 직업 중에 어떤걸로 정렬할거야?

// comparator
// (어떠한 객체를 정렬할 기준을 내가 정해서 알려주는거)

// (a, b) => a - b		오름차순
// (a, b) => b - a		내림차순

// 컴퓨터는 '크다, 작다, 같다'만 비교함

// p.sort((a, b) = > a.id - b.id);		id의 오름차순으로 정렬해라
// p.sort((a, b) = > b.age - a.age);	age의 내림차순으로 정렬해라