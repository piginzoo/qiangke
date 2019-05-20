console.log("自动，实时监控ing");  
$(document).ready(function(){ 

    reloadit()

});

function reloadit(){
    console.log("刷新页面................")
    setTimeout('detect()', 3000);
}


function detect(){
    
    var all = $('li.clearfix.ng-scope')

    all.each(function(){
        val = $(this).find('.postion_abt p.ng-binding').text()
        title= $(this).find('.postion_rel.fc33.ng-binding').text()
        if (val!="0"){
            console.log("我靠！有课了！")
            notifyMe(title)
        }else{
            console.log(title+",没动静...")
        }
    })

    setTimeout('reloadit()', 7000);
}

/**
靠，这个破网站是http的，chrome对http网站不支持桌面通知，只好用一个诡异的邮件通知来代替了
自动抢课程序：
https://blog.csdn.net/zhangwx6/article/details/56838678
https://blog.csdn.net/hhmouse111/article/details/36901699 桌面通知 https://segmentfault.com/a/1190000004969298
这个牛逼：https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html 啥都有 https://github.com/sxei/chrome-plugin-demo
**/