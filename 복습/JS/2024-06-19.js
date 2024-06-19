// console.log(document);
// console.log(document.childNodes);

// console.log(document.head);
console.log(document.body);
// console.log(document.title);
// console.log(document.URL);

// - 취소선이 그어지는 이유는
// - 해당 속성의 사용을 권장하지 않거나, 더 이상 지원되지 않을 가능성을 나타냄
// - 최신 보안 정책에서는 도메인을 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양 바람.
// console.log(document.domain);


// document 객체를 이용해 HTML 요소 선택!

// 1. getElemetById 
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

// 2. getElementsByClassName(HTMLCollection)
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName(HTMLCollection)
console.log(document.getElementsByTagName);

// 4. getElementsByName(NodeList)
console.log(document.getElementsByName('seyong'));

// 5. querySelector( css selector )
// 처음 발견한 하나만 가지고 옴.

console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name = "seyong"'));

// 6. querySelectorAll (css selector) (NodeList)
// 선택자에 해당되는 모든 요소를 선택

console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name = "seyong"]'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);
console.log(document.querySelectorAll('.pink').length);

console.log('========================================');

// 유사 배열 (HTMLCollection)
//[] 식으로 생긴 배열을 의미. 배열은 아님!
// index, length는 가능
// 배열과 달리 사용 가능한 메서드가 제한.