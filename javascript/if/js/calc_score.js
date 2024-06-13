/*
    점수
    90~100 A
    80~90 B
    70~80 C
    60~70 D
    60미만 F
*/

// let score = parseInt(Math.random(1)*100+1);

let score = parseInt(prompt("점수를 입력해주세요","ex) 99"));

// if(score <= 100 && score >= 0){
//     if(score>=90){
//         document.write(score + "점은 <span>A</span>학점입니다")
//     } else if(score >= 80){
//         document.write(score + "점은 <span>B</span>학점입니다")
//     } else if(score >= 70){
//         document.write(score + "점은 <span>C</span>학점입니다")
//     } else if(score >= 60){
//         document.write(score + "점은 <span>D</span>학점입니다")
//     } else{
//         document.write(score + "점은 <span>F</span>학점입니다")
//     }
// } else{
//     document.write("점수의 범위를 이탈하셨넹?")
// }

if(score > 100 || score < 0){
    alert("잘못된 입력입니다.");
} else{
    if(score>=90){
        document.write(score + "점은 <span>A</span>학점입니다")
    } else if(score >= 80){
        document.write(score + "점은 <span>B</span>학점입니다")
    } else if(score >= 70){
        document.write(score + "점은 <span>C</span>학점입니다")
    } else if(score >= 60){
        document.write(score + "점은 <span>D</span>학점입니다")
    } else{
        document.write(score + "점은 <span>F</span>학점입니다")
    }
}