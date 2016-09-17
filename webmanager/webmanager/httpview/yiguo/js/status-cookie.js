/**
 * Created by Administrator on 2016/9/11.
 */
//拿到usercookie显示状态
status();
function status(){
    var getuserCookie=getCookie("userCookie");
    if(getuserCookie.length>0) {
        var arruser = getuserCookie.split("@");
        console.log(arruser[0]);
        $("#status-login").html(arruser[0]);
        $("#status-login").attr("href","cart.html");
        $("#status-reg").html("[退出]");
        $("#status-reg").attr("href","login.html");
        //删除登录状态
        $("#status-reg").on("click",function(){
            delCookie("userCookie");
        })
    }
}
