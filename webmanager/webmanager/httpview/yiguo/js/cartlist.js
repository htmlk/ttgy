initCart();
//取cookie
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
        console.log(oData);
        num+=parseInt(sum);
        total=total+parseInt(oData.price)*sum;
         var html="<tr><td><input type=\"checkbox\"/><img height=\"50px\" src=\"../pubilc_img/0101001.jpg\" alt=\"\"/></td>"
           html+="<td>"+oData.name+"</td><td>0</td><td>"+oData.price+"元</td>";
           html+="<td><input type=\"button\" value=\"-\"/><input width='20px' type=\"text\" value=\""+sum+"\"/><input type=\"button\" value=\"+\"/></td>";
           html+="<td class=\"total\">￥"+oData.price*sum+"元</td><td>默认</td><td>收藏</td></tr>";
        $("table tbody").append(html);
        $(".cart-sum").html(num);
        $(".cart-price").html("¥"+total+".00");
    }
}
//添加到后台
