// 타이머 내장 함수

setTimeout(function(){      //콜백함수를 선언, 언제 그걸 부를것인가(mm/s)
    console.log(`3초 경과`);
}, 3000);           //3초경과 문구를 3초 후에 선언

const si = setInterval(()=>{
    console.log(new Date());
}, 1000);

setTimeout(()=>{
    console.log(`5초 경과 후 초시계 정지시킴`);
    clearInterval(si);
},5100)

// 함수 3개가 동시에 진행되고, 각각 자기 값을 도출함.