// if (조건식) {
//     조건식1이 true이면 실행
// } else if(조건식2){ 
//     조건식2가 true이면 실행
// } else{
//     모두아니면 실행
// }

// alert("testing....")

let age = prompt("나이를 입력해주세요", "ex) 17");
age = Number(age);
let charge = 0;

if(age > 0 && age < 120){
    if(age < 8){
        charge = 1000
        document.write("미취학아동의 요금은 <span> "+ charge +"</span> 입니다.");
    }else if(age >= 8 && age <= 13){
        charge = 2000
        document.write("초등학생의 요금은 <span> "+ charge +"</span> 입니다.");
    }else if(age >= 14 && age <= 19){
        charge = 2500
        document.write("중, 고등학생 요금은 <span> "+ charge +"</span> 입니다.");
    }else if(age >= 20){
        charge = 3000
        document.write("일반인의 요금은 <span> "+ charge +"</span>원 입니다.");
    }
} else{
    document.write("나이를 입력해주세요!!");
}