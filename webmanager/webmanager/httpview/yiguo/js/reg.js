//tab切换
$("#phone").on("click",function(){
    $("#tab2").css("display","none");
    $("#tab1").css("display","block");
    $("#phone").css({"height":"44px","border-top":"2px solid #008842"});
    $("#mail").css({"height":"44px","border-top":"1px solid #008842"});
})
$("#mail").on("click", function () {
    $("#tab1").css("display","none");
    $("#tab2").css("display","block");
    $("#mail").css({"height":"44px","border-top":"2px solid #008842"});
    $("#phone").css({"height":"44px","border-top":"1px solid #008842"});
})
//注册信息
var flag_phone=false;
var flag_psw1=false;
var flag_psw2=false;
$("#Phone_Mobile").on("blur",function() {
    var ajaxId = $("#Phone_Mobile").val();
  //  var ajaxPsw = $("#Phone_Password").val();
    var phone_check=/^1\d{10}$|^(0\d{2,3}-?|\(0\d{2,3}\))?[1-9]\d{4,7}(-\d{1,8})?$/;
    if(phone_check.test(ajaxId)){
        $.ajax({
            url:"../../product/GetProductById_get?id="+ajaxId,
            success:datafn
        })
        function datafn(result){
            if(result=="null"){
                $(".phone-check").css("color","green");
                $(".phone-check").html("√此号码可用");
                flag_phone=true;
            }else{
                $(".phone-check").css("color","red");
                $(".phone-check").html("*用户名已被注册！");
                flag_phone=false;
            }
        }
    }else{
        $(".phone-check").html("*请填写正确的手机号!");
        $(".phone-check").css("color","red");
        flag_phone=false;
    }
});
//验证密码
$("#Phone_Password").on("blur",function() {
    psd1=$("#Phone_Password").val();
    var flagZM=false ;
    var flagSZ=false ;
    var flagQT=false ;
    if(psd1.length<6 || psd1.length>12){
        $(".psw-check").html("*长度错误");
        $(".psw-check").css("color","red");
        flag_psw1=false;
    }else
    {
        for(i=0;i < psd1.length;i++)
        {
            if((psd1.charAt(i) >= 'A' && psd1.charAt(i)<='Z') || (psd1.charAt(i)>='a' && psd1.charAt(i)<='z'))
            {
                flagZM=true;
            }
            else if(psd1.charAt(i)>='0' && psd1.charAt(i)<='9')
            {
                flagSZ=true;
            }else
            {
                flagQT=true;
            }
        }
        if(!flagZM||!flagSZ||flagQT){
            $(".psw-check").html("*密码必须是字母数字的组合");
            $(".psw-check").css("color","red");
            flag_psw1=false;
        }else{
            $(".psw-check").html("√输入正确");
            $(".psw-check").css("color","green");
            flag_psw1=true;
        }

    }
})
//验证确认密码 
$("#Phone_ConfimPassword").on("blur",function() {
    psw1=$("#Phone_Password").val();
    psw2=$("#Phone_ConfimPassword").val();
    console.log(psw1+"  "+psw2)
    if(psw1!=psw2||psw2=="") {
        $(".psw-check2").html("*您两次输入的密码不一样");
        $(".psw-check2").css("color","red");
        flag_psw2=false;
    }else 
    {
        $(".psw-check2").html("√确认成功");
        $(".psw-check2").css("color","green");
        flag_psw2=true;
    }
})
//验证邮箱
function checkmail(){
    apos=form1.youremail.value.indexOf("@");
    dotpos=form1.youremail.value.lastIndexOf(".");
    if (apos<1||dotpos-apos<2)
    {
        divmail.innerHTML='<font class="tips_false">输入错误</font>' ;
    }
    else {
        divmail.innerHTML='<font class="tips_true">输入正确</font>' ;
    }
}
//提交按钮验证
$("#PhoneReg").on("click", function () {
    if((flag_phone==true)&&(flag_psw1==true)&&(flag_psw2==true)&&(flag_code==true)){
        addUser();
    }else{
        layer.msg('请正确填写信息!', {icon: 5});

    }
})
//用户信息提交至服务器
function addUser(ajaxId,ajaxPsw){
    var ajaxId = $("#Phone_Mobile").val();
    var ajaxPsw = $("#Phone_Password").val();
    var ajaxurl = "../../product/CreateUpdateProduct_get";
    var ajaxDataJson = {
        user: ajaxId,
        psw: ajaxPsw
    }
    var dataStr = JSON.stringify(ajaxDataJson);
    $.ajax({
        url: ajaxurl,
        data: {
            id: ajaxId,
            datajson: dataStr
        },
        success:callback
    });
    function callback(result){
        layer.alert('注册成功！', {icon: 6});
        window.location.href="login.html";
    }
}
