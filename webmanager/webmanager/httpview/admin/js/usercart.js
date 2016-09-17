/*js代码*/
// 每页的数量
 var pagesize=100;
//  第几页
 var pageindex=1;
//   添加html
getdata();
    //获取全部数据
    function getdata(){
        $.ajax({
            url:"../../product/GetProductsByPage_get",
            data:"pagesize="+pagesize+"&pageindex="+pageindex,
            success:backdata,
            dataType:"json"
        })
        html="";
    }
//获取数据
function backdata(data){
    var html;
    if(data!=null){
        for(var i=0;i<data.length;i++){
            var oData=JSON.parse(data[i].Data);
            if(oData.user!=null){
               if(oData.list!=null){
              // goodslist(oData.list);
            html="<tr><td><input type=\"checkbox\" name=\"yiguo\"/></td>";
            html+="<td>"+oData.user+"</td>";
            html+="<td>"+oData.psw+"</td>";
            html+="<td>ttgy"+oData.user+"</td>";
            html+="<td>"+oData.user+"</td>";
            html+="<td><a href='#' data-toggle=\"modal\" data-target=\"#myModal1\" >查看商品</a></td>";
            html+="<td><b class=\"glyphicon glyphicon-trash\"  >删除</b> </td> </tr>";
            $("#tab1").append(html);
              }
            }
        }
    }
    lookgoods();
}
function lookgoods() {
    $("table a").each(function(){
        $(this).on("click",function(i){
            i.preventDefault();//阻止默认行为，a会刷新页面
           $.ajax({
                url:"../../product/GetProductById_get?id="+$(this).parents("tr").find("td").eq(1).text(),
                success:backdata,
                dataType:"json"
            })
            function backdata(result){
                var oData=JSON.parse(result.Data);
                $(".admin-user").html(oData.user);
                var list=oData.list;

                var newlist=list.split("||");
               ;
                  for(var j=0;j<newlist.length;j++) {
                      var arrlist = newlist[j].split(" &");
                      goodslist(arrlist[0],arrlist[1])
                  }

            }
        })
    })
}
//admin购物车商品数量
var num=0;
//admin购物车商品总价钱
var total=0;
function goodslist(list,sum){

    $("#goods-list tbody").html("");
    $.ajax({
        url:"../../product/GetProductById_get?id="+list,
        success:backdata,
        dataType:"json"
    })
    function backdata(result){
        var  oData=JSON.parse(result.Data);
        var  html="<tr><td><input type=\"checkbox\" name=\"yiguo\"/></td>";
        html+="<td>"+oData.id+"</td>";
        html+="<td>"+oData.list+"</td>";
        html+="<td>"+oData.type+"</td>";
        html+="<td>"+oData.name+"</td>";
        html+="<td>"+oData.price+"</td>";
        html+="<td>"+oData.sum+"</td>";
        html+= "<td  ><img width='20px'  src=\"../pubilc_img/"+oData.id+".jpg\" class=\"img-responsive\" >"+"</td><td style=\"color: red\">共"+sum+"件</td></tr>";
        num+=parseInt(sum);
        total=total+parseInt(oData.price)*sum;
        $(".admin-sum").html(num);
        $(".admin-totals").html("¥"+total+".00");
        $("#goods-list tbody").append(html);
    }

}
