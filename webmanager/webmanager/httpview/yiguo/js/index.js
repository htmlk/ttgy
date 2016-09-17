/**
 * Created by Administrator on 2016/9/14.
 */
$('.local').kuCity();
//轮播
$(".af4").slide({
    affect:4,
    time:3000,
    speed:400,
});
//楼层滚动
var oNav = $('#fooNav');//导航壳
var aNav = oNav.find('li');//导航
var aDiv = $("#home .wrap");//楼层
var oTop = $('#goTop');
//回到顶部
$(window).scroll(function(){
    var winH = $(window).height();//可视窗口高度
    var iTop = $(window).scrollTop();//鼠标滚动的距离

    if(iTop>=$('#header').height()){
        oNav.fadeIn();
        oTop.fadeIn();
        //鼠标滑动式改变
        aDiv.each(function(){
            if(winH+iTop - $(this).offset().top>winH/2){
                aNav.removeClass('active');
                aNav.eq($(this).index()).addClass('active');
                aNav.find("span").css("display","none");
                aNav.eq($(this).index()).find("span").css("display","block");
            }
        })
    }else{
        oNav.fadeOut();
        oTop.fadeOut();
    }
})
//点击top回到顶部
oTop.click(function(){
    $('body,html').animate({"scrollTop":0},500)
})
//点击回到当前楼层
aNav.click(function(){
    var t = aDiv.eq($(this).index()).offset().top;
    $('body,html').animate({"scrollTop":t},500);
    $(this).addClass('active').siblings().removeClass('active');
});

