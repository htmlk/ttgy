var flag_login=false;
//验证用户名密码
$("#addLogin").on("click",function(){
    var user=$("#user").val();
    var psw=$("#psw").val();
    ajax(user,psw);
})
//判断用户名
$("#user").on("blur",function(){
    var user=$("#user").val();
    ajax(user);
})
//判断验证码
$("#input").on("blur",function(){
    if(flag_code==true){
        layer.tips('√', '#code',{
            tips: [2, 'green']
        });
    }else{
        layer.tips('*', '#code',{
            tips: [2, 'red']
        });
    }
})
//判断用户、密码
function ajax(user,psw){
  //  var flag_login=false;
    $.ajax({
        url:"../../product/GetProductById_get?id="+user,
        success:dataFn,
        dataType:"json"
    })
    function dataFn(result){
        if(result==null){
           // alert(result);
            layer.tips('*', '#user',{
                tips: [2, 'red']
            });
        }else{
            var oData=JSON.parse(result.Data);
            console.log(oData.user);
            //判断用户
            if(oData.user==user){
                //tips层-右
                layer.tips('√', '#user',{
                    tips: [2, 'green']
                });
            }
            //判断密码
            if(flag_code==true&&oData.user==user&&oData.psw==psw){
                layer.tips('√', '#psw',{
                    tips: [2, 'green']
                });
                //设置跳转
                window.location.href="index.html";
                setuserCookie(user);
                buygoods();
            }
        }
    }
}
//设置用户名密码cookie
function setuserCookie(username){
    var olduserCookie=getCookie("userCookie");
    if(olduserCookie.length>0){
       alert("用户已登录");
    }else{
        var str=username;
        var newuserCookie=str;
        setCookie("userCookie",newuserCookie,30);
    }
}
//添加到后台
function buygoods(){
        var usercookie=getCookie("userCookie");
        var CartCookie=getCookie("cartCookie");
        //  console.log(usercookie);
        // console.log(CartCookie);
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
          alert("购买成功");
          // layer.confirm('您确定要购买吗？', {
          //                 btn: ['确定','取消'] //按钮
          //                 }, function(){
          //                 layer.msg('网站公测免费购买成功', {icon: 1});
          //                 }, function(){
          //               layer.msg('你确定不买了？', {
          //                   time: 20000, //20s后自动关闭
          //                   btn: ['确定', '取消']
          //         });
          //   });
        }
}
