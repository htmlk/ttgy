//当前页面加载商品数据
ajaxGoods();
function ajaxGoods(){
    var request=new UrlSearch();//实例
    var pid=request.id;//取id
    var html;
    for(var j=1;j<36;j++){
        var pih=pid+"00"+j;
        $.ajax({
            url:"../../product/GetProductById_get?id="+pih,
            success:backdata,
            dataType:"json"
        })
        function backdata(result){
            if(result!=null){
                var oData=JSON.parse(result.Data);
                // console.log(oData);
                html="<dl><dt><a href=\"detail.html?id="+oData.id+"\"><img src=\"../pubilc_img/"+oData.id+"\.jpg\"/></a><div class=\"cart\"><a href=\"javascript:\" id=\""+oData.id+" \" >加入购物车</a></div></dt><dd><a href=\"detail.html\">"+oData.name+"</a> <b>￥"+oData.price+"</b> </dd> </dl>"
                $("#lists").append(html);

            }
            //购物车

        }
    }
}
//动态绑定事件 最外面的是页面上有的，然后找到点击事件
$(".wrap").on("click",".cart a",function(){
    serCartCookie($(this).attr("id"));
    $("#cart-list").html("");
    initCart();
})
