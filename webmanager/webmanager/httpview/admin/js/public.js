/**
 * Created by Administrator on 2016/9/13.
 */
//点击事件
$("#prev").click(function(){
    if( pageindex>1){
        pageindex--;
    }

})
$("#next").click(function(){
    pageindex++;
})
//获取url值
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
//添加商品;
$("#add").click(function () {
    var ajaxurl = "../../product/CreateUpdateProduct_get";
    var ajaxId = $("#id").val();
    var ajaxDataJson = {
        id: ajaxId,
        list: $("#list").val(),
        type: $("#type").val(),
        name: $("#name").val(),
        price: $("#price").val(),
        sum: $("#sum").val(),
        imgsrc:$("#pic").val()
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
        alert("天天果园");
        getdata();
    }
})
//删除商品
function del() {
    $("table b").each(function(){
        $(this).on("click",function(i){
            i.preventDefault();//阻止默认行为，a会刷新页面
            $(this).parents("tr").remove();
            $.ajax({
                url:"../../product/DeleteProductById_get?id="+$(this).parents("tr").find("td").eq(1).text(),
                success:backfn
            })
            function backfn(temp){
                alert("删除成功");
            }
        })
    })
}
