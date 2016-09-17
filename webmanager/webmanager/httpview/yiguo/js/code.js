/**
 * Created by Administrator on 2016/9/11.
 */
var code ;
//产生验证码
var checkCode = document.getElementById("code");
checkCode.onclick=function createCode(){
    code = "";
    var codeLength = 4;
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z');
    for(var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random()*36);
        code += random[index];
    }
    checkCode.value = code;
}
//验证码错误时出现提示多少秒后重试
function noClick(){
    var i=3;
    checkCode.setAttribute("disabled","disabled");
    checkCode.value="("+i+")秒后重试";

    stop=setInterval(function(){
        i--;
        checkCode.value="("+i+")秒后重试";
        if(i<=0){
            clearInterval(stop);
            checkCode.removeAttribute("disabled");
            checkCode.onclick();
        }
    },1000);
}
//校验验证码
var flag_code=false;
function validate(){
    var inputCode = document.getElementById("input").value.toUpperCase();
    if(inputCode.length <= 0) {
        $("#code-check").html("*请输入验证码!");
        $("#code-check").css("color","red");
        flag_code=false;
    }
    else if(inputCode != code ) {
        flag_code=false;
        $("#code-check").html("*验证码错误!");
        $("#code-check").css("color","red");
        // createCode();
        noClick();
        document.getElementById("input").value = "";

    }
    else {
        $("#code-check").html("√验证码输入正确！^-^");
        $("#code-check").css("color","green");
        flag_code=true;
    }
}