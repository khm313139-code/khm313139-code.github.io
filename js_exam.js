function checkResult(num1, num2, userResult) {
    num1 = Number(num1);
    num2 = Number(num2);
    userResult = Number(userResult);

    var realResult = num1 * num2;

    if(userResult === realResult){
        return "정답입니다.";
    } else {
        return "다시한번 확인하세요";
    }
}

// 버튼 클릭 시 호출되는 함수
function showResult() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var userResult = document.getElementById("userResult").value;

    if(num1 === "" || num2 === "" || userResult === "") {
        alert("모든 값을 입력하세요.");
        return;
    }

    // checkResult 함수의 return 값을 alert로 출력
    alert(checkResult(num1, num2, userResult));
}