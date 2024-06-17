let today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();



let day2 = "";
// 요일 switch
switch (day1) {
    case 0:
        day2 = "일요일";
        break;
    case 1:
        day2 = "월요일";
        break;
    case 2:
        day2 = "화요일";
        break;
    case 3:
        day2 = "수요일";
        break;
    case 4:
        day2 = "목요일";
        break;
    case 5:
        day2 = "금요일";
        break;
    case 6:
        day2 = "토요일";
        break;
}



let APM = "";
let hours;



// display 변수 선언
let displayDate = document.getElementById("today");

// innerHTML 속성은 - 태그와 글자를 지정할 수 있음
displayDate.innerHTML = `<h3>${year}년 ${month}월 ${date}일 ${day2}</h3>`

let clock = function() {
    let now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let hour, minute, second, APM;


    if(hours >= 12){
        APM = "오후";
        hour = hours - 12;
    } else if(hours < 12){
        APM = "오전";
        if(true){
            hour = "0" + hours;
        }
    }


    minute = (minutes < 10) ? "0" + minutes : minutes;
    second = (seconds < 10) ? "0" + seconds : seconds;


    
    let displayTime = document.getElementById("clock");
    displayTime.innerHTML = `<h3> ${APM} ${hour}: ${minute}: ${second}</h3>`
}

setInterval(clock, 1000);
