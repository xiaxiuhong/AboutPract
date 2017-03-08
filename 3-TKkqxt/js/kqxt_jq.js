$(function(){
	//1.选项卡切换内容
	$(".tabCont>div").first().show();
    $(".tabList").find("li").on("click",function(){
        $(this).addClass("ac");
        $(this).siblings().removeClass("ac");
        var index=$(this).index();
        $(".tabCont>div").eq(index).stop().fadeIn().siblings().hide();
    });
	//2.点击按钮退出登录界面
	var loginOut=function(){
		var r=confirm("确定退出登录页面？");
		if (r==true){
			window.location.href="http://baidu.com";
		}else{
			return false;
		}
	};
	$(".loginOut").on("click",function(){
		loginOut();
	});
	//3.点击更改用户头像
	var picStr;
	$(".tk_user label").on("change",function(){
		picStr=$(".fileInput").val();//获取选择的图片路径
		var len=picStr.length;//图片路径长度
		var picP=picStr.substring(picStr.lastIndexOf("\\")+1,len);//图片名
		var htmlPath=window.location.href;//html文件路径
		var htmlW=htmlPath.substring(0,htmlPath.lastIndexOf("/")+1);//图片前面路径
		$(".addPic img").attr("src",htmlW+"images/"+picP);//替换图片
	});
})