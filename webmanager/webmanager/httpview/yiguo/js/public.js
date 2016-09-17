/**
 * Created by Administrator on 2016/9/9.
 */

function UrlSearch(){
    var name,value;
    var str=location.href;//获取url
    var num=str.indexOf("?");//查找？的位置
    str=str.substr(num+1);//问号后面的内容
    var arr=str.split("&");
    for(var i=0;i<arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
            name=arr[i].substring(0,num);//等号前面的内容
            value=arr[i].substr(num+1);//等号后面的内容
            this[name]=value;
        }
    }
}
function geterrorimg(){
    t = document.getElementsByTagName("img");
    //console.log(t);
    for(i = 0; i < t.length; i++){
        t.item(i).onerror = function(){
            this.src = "../pubilc_img/laoding.gif";
            this.onerror = null;
        }
    }
}
$(window).on("scroll",function(){
    console.log($("body").scrollTop());
    if($("body").scrollTop()>100){
        console.log(1);
        $("#header").css({"position":"fixed","top":"0","left":"0","width":"100%"});
    }else{
        $("#header").css({"position":"relative","top":"0","left":"0","width":"100%"});
    }
})