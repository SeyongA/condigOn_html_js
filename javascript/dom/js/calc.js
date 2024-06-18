// alert("test");
function calc() {
    let v1 = document.getElementById("v1");
    let v2 = document.getElementById("v2");
    let op = document.getElementById("op");
    // console.log(v1, v2, op);

    let v1Val = v1.value;
    let v2Val = v2.value;
    let opVal = op.value;
    // console.log(v1Val, v2Val, opVal);
    // input value가 string(문자)임
    // console.log(typeof(v1Val), typeof(v2Val), typeof(opVal));

    //숫자(정수, 실수)로 형변환
    v1Val = Number(v1Val);
    v2Val = Number(v2Val);

    let result= 0;
    switch(opVal){
        case "+":
            result = v1Val + v2Val;
            break;
        case "-":
            result = v1Val - v2Val;
            break;
        case "*":
            result = v1Val * v2Val;
            break;
        case "/":
            result = v1Val / v2Val;
            break;
     }
    //  console.log(result);

    let res = document.getElementById("res");
    res.value = result;
}

function reset() {
    // 내가 한거
    // let v1 = document.getElementById("v1");
    // let v2 = document.getElementById("v2");
    // let op = document.getElementById("op");
    // let res = document.getElementById("res");

    // let reset = '';

    // v1.value = reset;
    // v2.value = reset;
    // op.value = reset;
    // res.value = reset;

    //모범 답안
    let v1 = document.getElementById("v1").value = "";
    let v2 = document.getElementById("v2").value = "";
    let op = document.getElementById("op").value = "";
    let res = document.getElementById("res").value = "";

}



