/**
 * Created by Administrator on 2016/9/14.
 */
    //获取城市
$('.local').kuCity();
//通过id获取商品分类
//商品list
$("#detail .banner li").each(function(){
    $(this).on("mouseover",function(){
        var picscr=$(this).find("img").attr("src").replace("85x85","500x500");
        $("#detail .banner p img").attr("src",picscr);
        $("#detail .banner li").find("img").css("border","1px solid #cccccc");
        $(this).find("img").css("border-color","#008842");
    })
})
var request=new UrlSearch();//实例
var pid=request.id;//取id
var html;
$.ajax({
    url:"../../product/GetProductById_get?id="+pid,
    success:backdata,
    dataType:"json"
})
function backdata(result){
    if(result!=null){
        var oData=JSON.parse(result.Data);
        //console.log(oData);
        $("#list_img").attr("src","../pubilc_img/list/"+oData.id+"-1.jpg");
        $("#list_img1").attr("src","../pubilc_img/list/"+oData.id+"-1.jpg");
        $("#list_img2").attr("src","../pubilc_img/list/"+oData.id+"-2.jpg");
        $("#list_img3").attr("src","../pubilc_img/list/"+oData.id+"-3.jpg");
        for(var index=1;index<5;index++){
            $(".tab1-img").append("<img src=\"../pubilc_img/detail/"+oData.id+"-"+index+".jpg\" alt=\"\"/>")
        }
        $(".detail-name").html(oData.name);
        $("#detail-price").html(oData.price);
        $("#detail-id").html(oData.id);
        $("#detail-list").html(oData.list);
        $("#detail-type").html(oData.type);
        geterrorimg();
        $(".sum_cart").append("<a href=\"javascript:\" id=\""+oData.id+" \"><span></span>加入购物车</a>")
    }
}
//加入购物车
$(".sum_cart").on("click","a",function(){
    serCartCookie($(this).attr("id"));
    $("#cart-list").html("");
    initCart();
})