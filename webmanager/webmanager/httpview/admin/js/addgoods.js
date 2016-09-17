/**
 * Created by Administrator on 2016/9/13.
 */
/*js代码*/
//通过id获取商品分类
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
/*展示商品*/
//每页的数量
var pagesize=100;
//第几页
var pageindex=1;
//添加html
getdata();
//点击事件
$("#prev").click(function(){
    if( pageindex>1){
        pageindex--;
    }
    getdata();
})
$("#next").click(function(){
    pageindex++;
    getdata();
})
//获取全部数据
function getdata(){
    $.ajax({
        url:"../../product/GetProductsByPage_get",
        data:"pagesize="+pagesize+"&pageindex="+pageindex,
        success:backdata
    })
    html="";
}
//获取数据
function backdata(data){
    var html;
    $("tbody tr").html("");
    if(data!=null){
        var Data=JSON.parse(data);

        for(var i=0;i<Data.length;i++){
            console.log(Data[i].Id);
            var oData=JSON.parse(Data[i].Data);
            html="<tr><td><input type=\"checkbox\" name=\"yiguo\"/></td>";
            html+="<td>"+oData.id+"</td>";
            html+="<td>"+oData.list+"</td>";
            html+="<td>"+oData.type+"</td>";
            html+="<td>"+oData.name+"</td>";
            html+="<td>"+oData.price+"</td>";
            html+="<td>"+oData.sum+"</td>";
            html+= "<td  ><img width='20px'  src=\"../pubilc_img/"+oData.id+".jpg\" class=\"img-responsive\" >"+"</td>";
            html+="<td><b class=\"glyphicon glyphicon-trash\"  >删除</b> <a id='"+Data[i].Id+"' class=\"glyphicon glyphicon-wrench\" data-toggle=\"modal\" data-target=\"#myModal\">修改</a></td> </tr>";
            $("#tab1").append(html);
        }
    }
    del();
    xiuGai();
}
