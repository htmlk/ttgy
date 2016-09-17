/**
 * Created by Administrator on 2016/9/13.
 */
/*js代码*/
//通过id获取商品分类
//获取url值
var request=new UrlSearch();//实例
var pid=request.id;//取id
var html;
if(pid!=0){
    for(var j=1;j<36;j++){
        var pih=pid+"00"+j;
        $.ajax({
            url:"../../product/GetProductById_get?id="+pih,
            success:backdata,
            dataType:"json"
        })
    }
}
//获取数据
function backdata(data){
    var html;
    // $("tbody tr").html("");
    if(data!=null){
        var oData=JSON.parse(data.Data);
        html="<tr><td><input type=\"checkbox\" name=\"yiguo\"/></td>";
        html+="<td>"+oData.id+"</td>";
        html+="<td>"+oData.list+"</td>";
        html+="<td>"+oData.type+"</td>";
        html+="<td>"+oData.name+"</td>";
        html+="<td>"+oData.price+"</td>";
        html+="<td>"+oData.sum+"</td>";
        html+= "<td><img"+oData.pic+"></td>";
        html+="<td><b class=\"glyphicon glyphicon-trash\"  >删除</b> <a id='"+data.Id+"' class=\"glyphicon glyphicon-wrench\" data-toggle=\"modal\" data-target=\"#myModal\">修改</a></td> </tr>";
        $("#tab1").append(html);
      }
    del();
    xiuGai();
}

