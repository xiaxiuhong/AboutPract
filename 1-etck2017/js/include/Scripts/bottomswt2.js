$(function(){
	// css
var str = '<style>';
str+='.cf:before, .cf:after { display: table; content: "" }';
str+='.cf:after { clear: both }';
str+='.cf { zoom: 1 }';
str += '*{margin:0;padding:0;border:none;}';
str += 'a{text-decoration:none;}';
str += '.float_container { width: 500px;height: 540px;background: url(/include/Images/swtimg/swtbg.png)no-repeat center center; border-radius: 10px;z-index: 1000;position: fixed; left: 50%; top:14%; margin-left: -250px;font-size: 14px; z-index: 999999999; padding-bottom: 5px; display: none;overflow: hidden; border-radius: 0px 0px 20px 20px;}';
str += '.ntitle{height: 155px; position: relative;}';
str += '.dblogo{position: absolute;width: 400px;height: 155px;top: 0px;left: 50%;margin-left: -200px;}';
str += '.close_swt{ width: 50px;height: 50px; display: block;position: absolute;top: 0px;right: 0px;cursor: pointer;}';
str += '.dbnr{overflow: hidden;}';
str += '.hmzj{ height:232px;border-radius: 5px 5px 0 0; padding-bottom: 8px;}';
str += '.float_container dl{display:none;}';
str += '.float_container dt{float:left;padding:27px 0 0 12px;}';
str += '.float_container dd{float:left;width:348px;margin-left:10px;display:inline;}';
str += '.time1{font-size: 13px;font-family: "Microsoft YaHei";text-align: center;margin: 9px 0 6px;}';
str += '.time1 span{color: #fff;background: rgba(0, 0, 0, .1);display: inline-block;border-radius: 2px; padding: 1px 10px;}';
str += '.y_box{ position: relative;background: #ffffff;border-radius: 8px; color: #000;font-size: 14px;line-height: 24px;font-family: "Microsoft YaHei";padding: 8px 10px; width: 349px; margin-left: 10px;letter-spacing: 5px;}';
str += '.y_box span{color:#FF1A1A;}';
str += '.bjpic{ position:absolute;left:-7px;top:3px;z-index:9;}';
str += '.telbg{display: block; height: 41px; width: 409px; margin: 0 auto; background: #fff;margin-top: 15px;border-radius: 5px;}';
str += '.ntel{width: 275px;height: 41px;float: left;margin-left: 15px;color: #303030;font-family: "Microsoft Yahei";outline: none;border: none;font-size: 16px;letter-spacing: 2px;}';
str += '#ntel {float:left;width:281px;height:29px;background:#f7f8fc;border:1px #d3d4d8 solid;border-radius:4px;color:#acadaf;font:13px/29px Microsoft Yahei;padding:0 10px;}';
str += '#cbBtn1 { float: right;border: none; width: 115px;height: 41px; background: #00a8e6;font-family: "Microsoft Yahei";color: #fff;text-align: center;font-size: 16px; border-radius: 0px 5px 5px 0px;outline: none;}';
str += '.sbtn {width:500px;margin-top:23px;}';
str += '.sbtn a span{ width: 250px;height: 78px;display: block;float: left;font-size: 30px;color: #fff;line-height: 75px;text-align: center;font-family: "Microsoft YaHei";}';
str += '.sbtn span.b1{background: #00aae6;);}';
str += '.sbtn span.b2{ background: #ff9d00;;}';

str+='</style>';
	
	// html

	str+='<div id="footTool" class="float_container cf">';
  str+='<div class="ntitle"><a href="javascript:;" onclick=\"openZoosUrl(\'chatwin\',\'&e=中间弹窗\');_czc.push([\'_trackEvent\', \'中间弹窗\', \'咨询\', \'zixun\'])\"   target=\"_blank\"><p class="dblogo" /></p></a><a href="javascript:;" ntitle="关闭" class="close_swt"></a></div>';
  str+='<div class="dbnr cf">';
    str+='<div class="hmzj cf">';
      str+='<dl class="cf" id="tools2" style="display:block;">';
	   str+='<a onclick="openZoosUrl();return false;" href="/swt/">';
        str+='<dt><img src="/include/Images/swtimg/dbzj1.png" /></dt>';
        str+='<dd>';
          str+='<div class="time1"><span id="now1">09 : 37: 45</span></div>';
            str+='<div class="y_box"><img src="/include/Images/swtimg/dbj.png" class="bjpic" />您好，这里是上海宏康医院在线咨询平台，请问有什么可以帮助到您的吗？</div>';
        str+='</dd>';
		str+='</a>';
      str+='</dl>';
      str+='<dl class="cf" id="tools3">';
	   str+='<a onclick="openZoosUrl();return false;" href="/swt/">';
        str+='<dt><img src="/include/Images/swtimg/dbzj1.png" /></dt>';
        str+='<dd>';
          str+='<div class="time1"><span id="now2">09 : 37: 45</span></div>';
            str+='<div class="y_box"><img src="/include/Images/swtimg/dbj.png" class="bjpic" />24年精专美齿，中国、葡萄牙、韩国齿科精英联袂制定美齿方案，为您提供高端齿科私人定制化服务！</div>';
        str+='</dd>';
		str+='</a>';
      str+='</dl>';
    str+='</div>';
    
         str+='<div class="telbg"><form method="post" action="http://tel.kuaishang.com.cn/calld.php" id="form2" target="aa2"><input type="hidden" name="fromurl" id="call_fromurl1" value=""><input type="hidden" name="sid" value="2015051047"><input type="hidden" name="did" value="1011570"><input name="tel"  id="tel2" placeholder="请输入您的电话号码" class="ntel"s><button id="cbBtn1" type="submit" title="免费回电" target="_blank"> 免费回电</button> </form></div>';
    str+='<div class="sbtn"><a href="javascript:;" onclick=\"openZoosUrl(\'chatwin\',\'&e=中间弹窗\');_czc.push([\'_trackEvent\', \'中间弹窗\', \'咨询\', \'zixun\'])\"   target=\"_blank\" class="cf"><span class="b1">在线咨询</span><span class="a-jg b2">立即回复</span></a></div>';
  str+='</div>';
str+='</div>';

	 
	$("body").eq(0).append(str);	
	$(".close_swt").click(function(){
		$("#footTool").slideUp();
		$("#LRdiv0").show();
	
		window.setTimeout(function(){
			dh();
		}, 15000);
	});
 
	dh();
});

function dh(){
	window.setTimeout(function(){
		var d = new Date();
		var h = d.getHours();
		var i = d.getMinutes();
		var s = d.getSeconds();
		i < 10 ? i = "0"+i : i;
		s < 10 ? s = "0"+s : s;
		$("#now1").html(h+":"+i+":"+s);
		$("#tools3").hide();
		$("#LRdiv0").hide();
		$("#footTool").hide().slideDown();		
	}, 1000);
	window.setTimeout(function(){
		var d = new Date();
		var h = d.getHours();
		var i = d.getMinutes();
		var s = d.getSeconds();
		i < 10 ? i = "0"+i : i;
		s < 10 ? s = "0"+s : s;
		$("#tools3").slideDown();
		$("#now2").html(h+":"+i+":"+s);		
	}, 3000);

}
// JavaScript Document
//var _hmt = _hmt || [];
//(function() {
//  var hm = document.createElement("script");
//  hm.src = "//hm.baidu.com/hm.js?f5bb588b1768b3f1521fb7b5d2fda8ba";
//  var s = document.getElementsByTagName("script")[0]; 
//  s.parentNode.insertBefore(hm, s);
//})();