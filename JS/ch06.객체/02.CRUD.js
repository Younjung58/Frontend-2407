// C - create, R - read/retrieve, U - update, D - delete

// 빈 객체 생성
let obj = {};

// 속성 추가(없는 속성의 값을 주었을 때)
obj['name']='우피';
obj.weight = 10;
console.log(obj);

// 속성 수정(있는 속성의 값을 변경했을 때)
obj.weight = 12;
console.log(obj);

// 속성 제거
delete obj.weight;
console.log(obj);

// 출력
console.log(obj.toString());        //obj라는 자료 구조(object)를 문자열로 출력해줘.(객체를 문자열로 변환)

// 반복문
obj.weight = 9;
obj.height = 50;
for (let key in obj){
    console.log(key, obj[key]);
}