/**
 * Created by Administrator on 2016/9/16.
 */
//修改商品
function xiuGai() {
    $("table a").each(function(){
        $(this).on("click",function(i){
            i.preventDefault();//阻止默认行为，a会刷新页面
            console.log($(this).attr("id"));
            $.ajax({
                url:"../../product/GetProductById_get?id="+$(this).attr("id"),
                success:backdata,
                dataType:"json"
            })
            function backdata(res){

                var oData=JSON.parse(res.Data);
                console.log(oData);
                $("#id").val(oData.id);
                $("#list").val(oData.list);
                $("#type").val(oData.type);
                $("#name").val(oData.name);
                $("#price").val(oData.price);
                $("#sum").val(oData.sum);
                $("#pic").val(oData.pic);
            }
        })
    })
}