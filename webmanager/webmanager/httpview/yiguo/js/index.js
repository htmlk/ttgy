/**
 * Created by Administrator on 2016/9/14.
 */
$('.local').kuCity();
//�ֲ�
$(".af4").slide({
    affect:4,
    time:3000,
    speed:400,
});
//¥�����
var oNav = $('#fooNav');//������
var aNav = oNav.find('li');//����
var aDiv = $("#home .wrap");//¥��
var oTop = $('#goTop');
//�ص�����
$(window).scroll(function(){
    var winH = $(window).height();//���Ӵ��ڸ߶�
    var iTop = $(window).scrollTop();//�������ľ���

    if(iTop>=$('#header').height()){
        oNav.fadeIn();
        oTop.fadeIn();
        //��껬��ʽ�ı�
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
//���top�ص�����
oTop.click(function(){
    $('body,html').animate({"scrollTop":0},500)
})
//����ص���ǰ¥��
aNav.click(function(){
    var t = aDiv.eq($(this).index()).offset().top;
    $('body,html').animate({"scrollTop":t},500);
    $(this).addClass('active').siblings().removeClass('active');
});

