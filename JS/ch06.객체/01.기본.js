/*
* 객체(object)
*/

// 1. 자료구조의 의미 - 파이썬의 딕셔너리, 자바의 맵과 유사함
//      오브젝트(객체)는 키, 밸류의 조합 (SystemRoot=C:\WINDOWS   -> 키 : 밸류)의 형태로 나타나져있음(딕셔너리, 맥...)
let personArray = ['James', 27, '남자', '프로그래머', 175.2];
let personObject = { name:'James', age: 27, gender: '남자', 
                    job: '프로그래머', height: 175.2};

// 2. 객체 본연의 의미 - 속성(Attribute)과 메소드(Method)(그 사물이 할 수 있는 능력값) 사물을 묘사
const pet = {
    name: '구름',
    eat: function(food = '사료'){
        console.log(`${food}을/를 먹습니다.`);
    }
}

console.log(pet.name);
pet.eat();      // 값을 안주면, 기본값(위에서 입력되어있는 사료)으로 출력
pet.eat('간식');        // 값을 주면, 준 값으로 출력

// length는 속성, 나머지는 method

//객체에 대한 접근
console.log(personObject.job);              //  이렇게 사용하는 것이 일반적
console.log(personObject['job']);           // 보통 이런식으로는 사용하지 않는다.
let key = 'job';
console.log(personObject[key]);           // 이렇게 key값을 변수로 사용하는 경우에 사용.

// 배열은 객체의 특수한 형태
console.log(typeof personArray);

let furitArray = ['감', '밤', '배'];
let fruitObject = {0: '감', 1: '밤', 2: '배'}