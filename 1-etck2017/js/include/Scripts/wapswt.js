
	//中间弹窗
document.writeln("<style>");
document.write('#LRfloater0 ,#LRfloater1, #divMenu , #divMenu3,.swtCenter{ display:none;}');
document.writeln("* {margin:0;padding:0;border:0;text-shadow:none;font-family:\"Microsoft YaHei\", Arial, Helvetica, sans-serif;}");
document.writeln("a:hover{text-decoration:none;}");
document.writeln(".relative {position:relative;}");
document.writeln(".absolute {position:absolute;}");
document.writeln(".float_left {float:left;}");
document.writeln(".float_right {float:right;}");
document.writeln(".swtCenter {-webkit-box-shadow: 5px 5px 5px #ccc; -moz-box-shadow: 5px 5px 5px #ccc; box-shadow: 5px 5px 5px #ccc;width:279px;height:250px; margin-left:5px; background-color:#FFF;position:fixed;left:50%;top:50%;z-index:200;margin-left:-139px;margin-top:-130px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;overflow:visible!important}");
document.writeln(".swtCenter h3 {width:100%;font-size:28px;text-align:center; color:#2e3642;font-weight:500;margin-top:33px;}");
document.writeln(".swtCenter h4 {width:100%; width:270px; margin-left:5px;font-size:12px;margin-top:5px;text-align:center;color:#2e3642;}");
document.writeln(".mfhd {width:227px;height:32px;border:1px solid #6a7380;-moz-border-radius:17px;-webkit-border-radius:17px;border-radius:17px;margin:8px auto 5px;}");
document.writeln(".swt_bottom21 {margin-left: 0px;margin-top: 0px;width:156px;height:30px;line-height:30px; background-color:#FFF;font-size:14px;color:#6a7380;-moz-border-radius:15px 0 0 15px;-webkit-border-radius:15px 0 0 15px;border-radius:15px 0 0 15px;padding-left:13px;float:left;outline:none;}");
document.writeln(".swt_bottom3 {width:58px;height:32px;display:block;test-decoration:none;line-height:30px;color:#fff; background:#6a7380;font-size:12px;text-align:center;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;}");
document.writeln(".swtCenter p {width:230px;font-size:12px;color:#6a7380;margin:0 auto;padding-top:10px;}");
document.writeln(".swt_lists {bottom:0;left:0;width:100%;height:58px;line-height:58px;-moz-border-radius:0 0 15px 15px;-webkit-border-radius:0 0 15px 15px;border-radius:0 0 15px 15px;}");
document.writeln(".swt_lists a {display:block;width:50%;height:100%;position:relative;float:left; cursor:pointer;}");
document.writeln(".swt_list1 { background-color:#0b55c4;-moz-border-radius:0 0 0 15px;-webkit-border-radius:0 0 0 15px;border-radius:0 0 0 15px;}");
document.writeln(".swt_list2 { background-color:#ff9e0c;-moz-border-radius:0 0 15px 0;-webkit-border-radius:0 0 15px 0;border-radius:0 0 15px 0;}");
document.writeln(".swt_lists a i,.swt_lists a em {display:block;position:absolute;left:50%;color:#fff;text-decoration:none;}");
document.writeln(".swtCallIcon {top:50%;margin-left:-50px;margin-top:-14px;width:25px;height:35px; background:url(/include/images/call_1.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swt_lists em {height:100%;top:0;margin-left:-25px;font-size:16px;font-style:normal}");
document.writeln(".swtLinkIcon {top:50%;margin-left:-60px;width:30px;height:30px;margin-top:-16px;background:url(/include/images/call_2.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swtLinkCounter {top:15px;width:14px;height:14px;margin-left:-34px;line-height:13px;text-align:center;font-size:9px;background-color:#e60012;-moz-border-radius:14px;-webkit-border-radius:14px;border-radius:14px;-moz-box-shadow:0 0 3px rgba(0,0,0,0.8);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.8);box-shadow:0 0 3px rgba(0,0,0,0.8);z-index:3;font-style:normal;}");
document.writeln(".closeBtn_swt {right: -5px;top: -5px;width: 44px;height: 44px;font-size: 40px;color: #fff;text-align: center;line-height: 40px;border-radius: 50%;background: #2E3642;cursor: pointer;}");
document.writeln("</style>");



document.writeln("<div class=\"swtCenter relative\">");
document.writeln("    	<span class=\"closeBtn_swt absolute\" id=\"closeBtn_swt\" onclick=\"hidecenter()\">×</span>");
document.writeln("    	<h3>上海曙康医院</h3>");
document.writeln("        <h4>SHANGHAI HONGKANG HOSPITAL</h4>");
document.writeln("        <div class=\"mfhd clearfix\">");

document.writeln("<form method=\"post\" action=\"http://tel.kuaishang.com.cn/calld.php\" id=\"form1\" target=\"i\">");
document.writeln("<input type=\"hidden\" name=\"fromurl\" id=\"call_fromurl1\" value=\"\" />");
document.writeln("<input type=\"hidden\" name=\"sid\" value=\"2015051047\" />");
document.writeln("<input type=\"hidden\" name=\"did\" value=\"1011570\" />");
document.writeln("  <input name=\"tel\" type=\"number\" id=\"tel2\" placeholder=\"请输入您的电话号码\" class=\"swt_bottom21\"/>");
document.writeln("  <a name=\"shubmitdh\" type=\"submit\" href=\"javascript:;\" target=\"_self\" class=\"swt_bottom3\" id=\"tel_btn\" value=\"\"/>免费回电</a> ");
document.writeln("</form>");
document.writeln("<iframe name=\"i\" style=\"display:none\"></iframe>");
document.writeln("        </div>");
document.writeln("        <p>");
document.writeln("            	我们将立即回电。该通话对您免费，请放心");
document.writeln("接听！请直接输入号码，座机前加区号。");
document.writeln("        </p>");
document.writeln("        <div class=\"swt_lists absolute\">");
document.writeln("        	<a href=\"/hzfw/yygh/\" target=\"_blank\" class=\"swt_list1\"><i class=\"swtCallIcon\"></i><em>预约挂号</em></a>");
document.writeln("            <a class=\"swt_list2\" onclick=\"openZoosUrl();return false;\" style=\"cursor:pointer\" target=\"_blank\" ><i class=\"swtLinkIcon\"></i><em>在线咨询</em></a>");
document.writeln("        </div>");
document.writeln("    </div>");


$('#tel_btn').click(function(){$('#form1').submit()})
	setTimeout(showcenter,5000);	
	
	function showcenter(){
		$(".swtCenter").fadeIn();
		//document.getElementsByClassName('swtCenter')[0].style.display='block';
	}	
	function hidecenter(){
		$(".swtCenter").fadeOut();
		//document.getElementsByClassName('swtCenter')[0].style.display='none';
		setTimeout("showcenter()",30000);
	}	
	
	


//加载商务通路径代码
document.write('<script language="javascript" src="http://pbt.zoosnet.net/JS/LsJS.aspx?siteid=PBT56215151&float=1"></script>');

function swt()
{
   LR_HideInvite();
   openZoosUrl();
   return false;
}

$(document).ready(function(){
       $.each($("a"),function(i,obj){
		  if(this.href.indexOf('swt/')>0){
			  this.href = "javascript:;";
			  $(this).click(function() {
				  swt();return false
                  //alert(this.href);
              });
		   }
          
       });
});	   

	