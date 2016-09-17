/**
 * Created by Administrator on 2016/9/10.
 */
// serCartCookie("0101001");
//设置cookie
function serCartCookie(code){
    var oldCartCookie=getCookie("cartCookie");
    if(oldCartCookie.length>0){
        var arrOldProducts=oldCartCookie.split("||");
        var isExist=false;
        for(var i=0;i<arrOldProducts.length;i++){
            var arrProducts=arrOldProducts[i].split("&");
            if(arrProducts[0]==code){
                arrProducts[1]=parseInt(arrProducts[1])+1;
                isExist=true;
                arrOldProducts[i]=arrProducts.join("&");
                break;
            }
        }
        if(isExist){
            var newCartCookie=arrOldProducts.join("||");
            setCookie("cartCookie",newCartCookie,30);
        }else{
            var str=code+"&"+1;
            var newCartCookie=oldCartCookie+"||"+str;
            setCookie("cartCookie",newCartCookie,30);
        }

    }else{
        var str=code+"&"+1;
        var newCartCookie=str;
        setCookie("cartCookie",newCartCookie,30);
    }
}
// alert(getCookie("cartCookie"));
initCart();
//取得cookie
function initCart(){
    var strCartCookie=getCookie("cartCookie");
    if(strCartCookie.length>0){
        var arrProducts=strCartCookie.split("||");
        for(var i=0;i<arrProducts.length;i++){
            var arrProduct=arrProducts[i].split("&");
            setProduct(arrProduct[0],arrProduct[1]);
        }
    }
}
//通过cookie取得json数据
//购物车商品数量
var num=0;
//购物车商品总价钱
var total=0;
//var sum=0;
function setProduct(code,sum){
    num=0;
    total=0;
    $.ajax({
        url:"../../product/GetProductById_get?id="+code,
        success:cookiedata,
        dataType:"json"
    })
    function cookiedata(result){
        var oData=JSON.parse(result.Data);
        var html="<li id=\"del_"+oData.id+"\"><a href=\"\"><img height=\"30px\" src=\"../pubilc_img/"+oData.id+".jpg\" alt=\"\"/>" ;
        html+="<i>"+oData.name+"</i><div class=\"right\"><span>"+oData.price+"</span>*<b>"+sum+"</b> <a href=\"javascript\:delProduct\("+parseInt(oData.id)+"\)\">删除</a> </div> </a></li>";
        $("#cart-list").append(html);
        num+=parseInt(sum);
        total=total+parseInt(oData.price)*sum;
        $(".cart-sum").html(num);
        $(".cart-price").html("¥"+total+".00");
    }
}
//删除cookie
function delProduct(code){
    //alert(code);
    //console.log($("#del_"+parseInt(code)));
    $("#del_"+parseInt(code)).remove();
    var oldCartCookie=getCookie("cartCookie");
    if(oldCartCookie.length>0){
        var arrOldProducts=oldCartCookie.split("||");
        var isExist=false;
        for(var i=0;i<arrOldProducts.length;i++){
            var arrProducts=arrOldProducts[i].split("&");
            if(arrProducts[0]==code){
                arrProducts[1]=parseInt(arrProducts[1])+1;
                isExist=true;
                arrOldProducts.splice(i,1);
                break;
            }
        }
        var newCartCookie=arrOldProducts.join("||");
        setCookie("cartCookie",newCartCookie,30);
        $("#cart-list").html("");
        $(".cart-sum").html("0");
        $(".cart-price").html("¥00.00");
        initCart();
    }

}

