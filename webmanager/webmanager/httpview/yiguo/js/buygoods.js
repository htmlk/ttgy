/**
 * Created by Administrator on 2016/9/16.
 */
function setusercartcookie(){
    var usercookie=getCookie("userCookie");
    var CartCookie=getCookie("cartCookie");
    var ajaxurl = "../../product/CreateUpdateProduct_get";
    var ajaxDataJson = {
        user: usercookie,
        psw:$("#psw").val(),
        list:CartCookie
    }
    var dataStr = JSON.stringify(ajaxDataJson);
    $.ajax({
        url: ajaxurl,
        data: {
            id: usercookie,
            datajson: dataStr
        },
        success:callback
    });
    function callback(result){
        alert("天天果园");
    }
}