// alert("text")

// JS 표준내장객체
// - 기본적으로 미리 정의된 객체.
// - 모든 JS환경에서 사용할 수 있는 내장객체를 말한다.
// - 자주 사용되는 기능을 미리 구현해 놓은것.

// 1. Date 객체 : 시간, 날짜

// 날짜를 생성하여 저장

let now = new Date();
console.log(now);

// tmi 타임스태프 (timestamp)
// :1970년 01월 01일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// - "에포크" 이후의 시간을 나타냄
// Q) 에포크란? - 특정 시간의 기준점.
// Q2) why? 왜 이 시간 이후인가요?
// A) A) 1. 역사적인 이유 ~~~~~~ 


// new Date();
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(1000*60*60*24);  //24시간
console.log(jan_02_1970); 

// new Date(date_string)
let date = new Date("2024-06-03");
console.log(date);

let date2 = new Date('2024', '06', '08'); // MM은 (0~11) 1월부터 12월
console.log(date2); 

// 관련 메서드
// 객체 점 접근법.
// getDate() : 월의 몇 번째 날인지 반환.
// getDay() : "주"의 몇번째 날인지 반환. (0부터 시작) 일요일 기준
// getMonth() : 몇 번째 달인지 반환한다.(0부터 시작)
// getHours() : 시간을 반환 (0부터 23까지)
// getSeconds() : 초를 반환 (0부터 59까지)
// getMillisecons() : 밀리초를 반환한다. (0~ 999)
// getTime() : 1970년 1월 1일부터 현재까지의 밀리초 단위 시간을 반환.

console.log("=====================================");

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate())
console.log(now.getMinutes());
console.log(now.getMilliseconds());
console.log(now.getDay());
console.log(now.getTime());

console.log("===================================");

// Math 객체
// - 수학적인 상수와 함수

// - 속성
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// - 메서드
console.log(Math.min(100, -2, 0, 5));
console.log(Math.max(100, -2, 0, 5));
console.log(Math.round(5.3124));
console.log(Math.round(5.8712));
console.log(Math.ceil(5.2712));
console.log(Math.floor(5.712));
console.log(Math.random());

// 속성은 객체의 상태를 나타내는 데이터.
// 메서드는 객체가 수정할 수 있는 동작이나 기능을 나타낸다.

// Math.random() 응용예시
// 0 ~ 9

console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 11

// Quiz (실습)

// Q1) 1~ 100
console.log(Math.floor(Math.random() * 100 + 1));
console.log(parseInt(Math.random() * 100 + 1));

// Q2) 20 ~22
console.log(Math.floor(Math.random() * 3 + 20));
