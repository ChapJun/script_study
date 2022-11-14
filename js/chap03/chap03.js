// "use strict"; // 전역변수


console.log('abc');
console.log('bcd');

x = 314;

vvd = 'one\ntwo\nthree';

const log = console.log;
log(vvd);
log("X".padStart(3, '*')); // **X
log("X".padEnd(3, '*')); // X**
log("X".repeat(5)); // XXXXX

log(vvd[0]); // o

if(undefined || null || 0 || -0 || NaN || "") {
    log('this is false');
}

// 자바스크립트의 문자열 함수는 새로운 문자열을 반환 하는 것
let s = "hello";
s.toUpperCase();
log(s);

let b = [1,2,3];
let c = Array.from(b); // 배열 복사

// IIFE (즉시 작동하는 함수식)
// 함수식 안에서 사용된 변수, 함수들은 모두 블럭 바깥에 영향을 줄 수 없다.
(function () {
    'use strict';
    let y = 315;
})();