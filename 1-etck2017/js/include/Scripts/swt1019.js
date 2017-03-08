document.write('<link rel="stylesheet" href="/include/Css/swt.css" />');
// 底部弹窗
document.writeln("<div id=\"footer_swt\">");
document.writeln("    <ul>");
document.writeln("        <li><img src=\"\/include/Images/bottom_01.jpg\"></li>");
document.writeln("        <li><a href=\"/zt/ayr/\" target=\"_blank\"><img src=\"\/include/Images/bottom_02.jpg\"></a></li>");
document.writeln("        <li><a onclick=\"openZoosUrl();LR_HideInvite();return false;\" href=\"javascript:void(0)\"><img src=\"\/include/Images/bottom_03.jpg\"></a></li>");
document.writeln("        <li class=\"lxb\">");
document.writeln("<form class=\"f_n_form\" method=\"post\" action=\"http://tel.kuaishang.com.cn/calld.php\" id=\"form2\" target=\"i\">");
document.writeln("<input type=\"hidden\" name=\"fromurl\" id=\"call_fromurl1\" value=\"\" />");
document.writeln("<input type=\"hidden\" name=\"sid\" value=\"2015051047\" />");
document.writeln("<input type=\"hidden\" name=\"did\" value=\"1011570\" />");
document.writeln("  <input type=\"text\"  name=\"tel\" id=\"telInput\" class=\"input_1\" value=\"请输入您的电话号码\" autocomplete=\"off\" onfocus=\"if(this.value=='请输入您的电话号码'){this.value='';}\" onblur=\"if(this.value==''){this.value='请输入您的电话号码';}\">");
document.writeln(" <input type=\"submit\" id=\"callBtn\" value=\"给我回拨\" class=\"input_2\"> ");
document.writeln("</form>");
document.writeln("<iframe name=\"i\" style=\"display:none\"></iframe>");
document.writeln("        </li>");
document.writeln("        <li><a href=\"javascript:;\" onClick=\"pageScroll()\"><img src=\"\/include/Images/bottom_05.jpg\"></a></li>");
document.writeln("    </ul>");
document.writeln("</div>");


// 右侧弹窗

document.writeln("<div id=\"left_swt\">");
document.writeln("<p>");
document.writeln(" <a onclick=\"openZoosUrl();LR_HideInvite();return false;\" href=\"javascript:void(0)\" class=\"a1\"></a>");
document.writeln(" <a id=\"close\" class=\"a2\"></a>");
document.writeln("</p>");
document.writeln("</div>");
document.writeln("<div id=\"swt_right\">");
document.writeln("<ul id=\"swt_right_nav\">");
document.writeln("<li id=\"mainCate-1\" class=\"mainCate\">");
document.writeln(" <h3><a onclick=\"openZoosUrl();LR_HideInvite();return false;\" href=\"javascript:void(0)\" target=\"_blank\"><img src=\"\/include/Picture/xx.png\"></a></h3>");
document.writeln("<div class=\"subCate\">");
document.writeln("<a onclick=\"openZoosUrl();LR_HideInvite();return false;\" href=\"javascript:void(0)\" target=\"_blank\"><img src=\"\/include/Picture/xx_pic.png\" class=\"a1\"></a>");
document.writeln("</div>");
document.writeln("</li>");
document.writeln(" <li id=\"mainCate-2\" class=\"mainCate\">");
document.writeln(" <h3><a onclick=\"openZoosUrl();LR_HideInvite();return false;\" href=\"javascript:void(0)\" target=\"_blank\"><img src=\"\/include/Picture/qq.png\"></a></h3>");
document.writeln("  <div class=\"subCate\">");
document.writeln("  <a onclick=\"openZoosUrl();LR_HideInvite();return false;\" href=\"javascript:void(0)\" target=\"_blank\"><img src=\"\/include/Picture/qq_pic.png\" class=\"a2\"></a>");
document.writeln(" </div>");
document.writeln("  </li>");
document.writeln("<li id=\"mainCate-3\" class=\"mainCate evenLeval\">");
document.writeln("<h3><img src=\"\/include/Picture/tel.png\"></h3>");
document.writeln(" <div class=\"subCate\">");
document.writeln(" <div class=\"dh\">");
document.writeln("<form name=\"fcall2\" id=\"fcall2\" method=\"post\" action=\"http://tel.kuaishang.com.cn/calld.php\" target=\"aa2\">");
document.writeln("<iframe name=\"aa2\" id=\"aa2\" frameborder=\"0\" height=\"0\" width=\"0\"></iframe>");
document.writeln("<input name=\"fromurl\" id=\"call_fromurl1\" value=\"\" type=\"hidden\">");
document.writeln("<input name=\"sid\" value=\"2015051047\" type=\"hidden\">");
document.writeln("<input name=\"did\" value=\"1011570\" type=\"hidden\">");
document.writeln("<input type=\"text\" name=\"tel\" id=\"telInput\" class=\"aa1\" autocomplete=\"off\">");
document.writeln("<input type=\"submit\" id=\"callBtn\" value=\"给我回拨\" class=\"aa2\">");
document.writeln("</form>");
document.writeln("</div>");
document.writeln(" </div>");
document.writeln(" </li>");

document.writeln("<li id=\"mainCate-4\" class=\"mainCate\">");
document.writeln(" <h3><img src=\"\/include/Picture/wx.png\"></h3>");
document.writeln("<div class=\"subCate\"><img src=\"\/include/Picture/wx_pic.png\" class=\"a4\"></div>");
document.writeln("</li>");
document.writeln(" <li class=\"mainCate evenLeval\">");
document.writeln(" <h3><a href=\"javascript:;\" id=\"h_top\"><img src=\"\/include/Picture/top.png\"/></a></h3></li>");
document.writeln("</ul>");
document.writeln("  </div>");

$("#swt_right_nav").slide({
    type: "menu", //效果类型
    titCell: ".mainCate", // 鼠标触发对象
    targetCell: ".subCate", // 效果对象，必须被titCell包含
    delayTime: 0, // 效果时间
    triggerTime: 0, //鼠标延迟触发时间
    defaultPlay: false, //默认执行
    returnDefault: true //返回默认
});


$(function() {
    var top = ($(window).height() - $("#swt_right").height()) / 2 + "px";
    $("#swt_right").css({
        'top': top
    });
    $("#swt_right #h_top").click(function() {
        $("#swt_right").animate({
            'top': top
        }, 600);
        $('html,body').animate({
            'scrollTop': 0
        }, 600);
    })
})
document.write('<script type = "text/javascript" src = "/include/Scripts/jquery.hhservice.js" ></script>');
$(function() {
    $("#swt_right").fix({
        float: 'right',
        minStatue: false,
        skin: 'green',
        durationTime: 1000
    })
});

// 右侧弹窗 结束


// 中间弹窗
/*
document.writeln("<div class=\"swtCenter relative\" id=\"swtCenter\">");
document.writeln("<a href=\"javascript:void(0)\" class=\"closeBtn_swtz\" onclick=\"openZoosUrl();return false;\"></a>");
document.writeln("<a href=\"javascript:;\"  target=\"_self\" class=\"closeBtn_swt\"></a>");
document.writeln("<div class=\"swtCenterdw\"></div>");
document.writeln("</div>");
 */


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
document.writeln(".swt_bottom21 {margin-left: 0px;margin-top: 0px;width:154px;height:30px;line-height:30px; background-color:#FFF;font-size:14px;color:#6a7380;-moz-border-radius:15px 0 0 15px;-webkit-border-radius:15px 0 0 15px;border-radius:15px 0 0 15px;padding-left:13px;float:left;outline:none;}");
document.writeln(".swt_bottom3 {width:58px;height:32px;display:block;test-decoration:none;line-height:30px;color:#fff; background:#6a7380;font-size:12px;text-align:center;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:right;}");
document.writeln(".swtCenter p {width:230px;font-size:12px;color:#6a7380;margin:0 auto;padding-top:10px;}");
document.writeln(".swt_lists {bottom:0;left:0;width:100%;height:58px;line-height:58px;-moz-border-radius:0 0 15px 15px;-webkit-border-radius:0 0 15px 15px;border-radius:0 0 15px 15px;}");
document.writeln(".swt_lists a {display:block;width:50%;height:100%;position:relative;float:left; cursor:pointer;}");
document.writeln(".swt_list1 { background-color:#2693bc;-moz-border-radius:0 0 0 15px;-webkit-border-radius:0 0 0 15px;border-radius:0 0 0 15px;}");
document.writeln(".swt_list2 { background-color:#ff9f0c;-moz-border-radius:0 0 15px 0;-webkit-border-radius:0 0 15px 0;border-radius:0 0 15px 0;}");
document.writeln(".swt_lists a i,.swt_lists a em {display:block;position:absolute;left:50%;color:#fff;text-decoration:none;}");
document.writeln(".swtCallIcon {top:50%;margin-left:-50px;margin-top:-11px;width:25px;height:35px; background:url(/include/Images/swt_center_tel.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swt_lists em {height:100%;top:0;margin-left:-20px;font-size:16px;font-style:normal}");
document.writeln(".swtLinkIcon {top:59%;margin-left:-60px;width:30px;height:30px;margin-top:-16px;background:url(/include/Images/swt_center_msg.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swtLinkCounter {top:15px;width:14px;height:14px;margin-left:-34px;line-height:13px;text-align:center;font-size:9px;background-color:#e60012;-moz-border-radius:14px;-webkit-border-radius:14px;border-radius:14px;-moz-box-shadow:0 0 3px rgba(0,0,0,0.8);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.8);box-shadow:0 0 3px rgba(0,0,0,0.8);z-index:3;font-style:normal;}");
document.writeln(".closeBtn_swt {right: -5px;top: -5px;width: 44px;height: 44px;font-size: 40px;color: #fff;text-align: center;line-height: 40px;border-radius: 50%;background: #2E3642;cursor: pointer;}");
document.writeln("</style>");



document.writeln("<div class=\"swtCenter relative\">");
document.writeln("    	<span class=\"closeBtn_swt absolute\" id=\"closeBtn_swt\" onclick=\"hidecenter()\">×</span>");
document.writeln("    	<h3>上海曙康口腔</h3>");
document.writeln("        <h4>SHANGHAI SK DENTAL</h4>");
document.writeln("        <div class=\"mfhd clearfix\">");
document.writeln("<form method=\"post\" action=\"http://tel.kuaishang.com.cn/calld.php\" id=\"form1\" target=\"i\">");
document.writeln("<input type=\"hidden\" name=\"fromurl\" id=\"call_fromurl1\" value=\"\" />");
document.writeln("<input type=\"hidden\" name=\"sid\" value=\"2015051047\" />");
document.writeln("<input type=\"hidden\" name=\"did\" value=\"1011570\" />");
document.writeln("<input name=\"tel\" type=\"number\" id=\"tel2\" placeholder=\"请输入您的电话号码\" class=\"swt_bottom21\"/>");
document.writeln("<input type=\"submit\" id=\"callBtn\" value=\"免费回电\" class=\"swt_bottom3\">");
document.writeln("</form>");
document.writeln("<iframe name=\"i\" style=\"display:none\"></iframe>");
document.writeln("        </div>");
document.writeln("        <p>");
document.writeln("            	我们将立即回电。该通话对您免费，请放心");
document.writeln("接听！请直接输入号码，座机前加区号。");
document.writeln("        </p>");
document.writeln("        <div class=\"swt_lists absolute\">");
document.writeln("        	<a class=\"swt_list1\" onclick=\"openZoosUrl();return false;\" style=\"cursor:pointer\" target=\"_blank\" ><i class=\"swtCallIcon\"></i><em>预约挂号</em></a>");
document.writeln("          <a class=\"swt_list2\" onclick=\"openZoosUrl();return false;\" style=\"cursor:pointer\" target=\"_blank\" ><i class=\"swtLinkIcon\"></i><em>在线咨询</em></a>");
document.writeln("        </div>");
document.writeln("    </div>");


$('#tel_btn').click(function() { $('#form1').submit() })
setTimeout(showcenter, 5000);

function showcenter() {
    $(".swtCenter").fadeIn();
    //document.getElementsByClassName('swtCenter')[0].style.display='block';
}

function hidecenter() {
    $(".swtCenter").fadeOut();
    //document.getElementsByClassName('swtCenter')[0].style.display='none';
    setTimeout("showcenter()", 30000);
}


//加载商务通路径代码
document.write('<script language="javascript" src="http://pbt.zoosnet.net/JS/LsJS.aspx?siteid=PBT23325847&float=1"></script>');

//商务通代码
function swt(str) {
    if (typeof str == 'undefined') {
        str = '';
    }
    LR_HideInvite();
    openZoosUrl('chatwin', ('&e=' + str));
    return false;
}


//中间弹窗
/*
setTimeout(openMswt, 5000);
var footerHeight = $(".footer");
var bTrue = false;

function _footerHeight() {
    return footerHeight.height();
};
$(window).resize(function() {
    _footerHeight();
    if (bTrue) {
        footerHeight.css({ bottom: -_footerHeight() + 'px' })
    } else {
        footerHeight.css({ bottom: 0 + 'px' })
    }
});

function openMswt() {
    $(".swtCenter").fadeIn(600, function() {
        footerHeight.stop().animate({ bottom: -_footerHeight() + 'px' }, 400, function() {
            $(this).show();
            bTrue = true;
        });

    })
}

function closeSwt() {
    $(".swtCenter").fadeOut(600, function() {
        footerHeight.show().stop().animate({ bottom: 0 + 'px' }, 400, function() {
            bTrue = false;
        });

    }).delay(30000).fadeIn(function() { openMswt(); })
}

function aa() {
    document.getElementById('divcen').style.display = "none";
    document.getElementById('LRfloater1').style.display = "none";

}
$(function() {
    footerHeight.show();
    $(".closeBtn_swt").on("click", function() {
        closeSwt();
    })
})


function pageScroll() {
    window.scrollBy(0, -100);
    scrolldelay = setTimeout('pageScroll()', 100);
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (sTop == 0) clearTimeout(scrolldelay);
}
 */






//左边商务通



document.write('<link rel="stylesheet" href="/include/Css/zzsc.css" />');

document.writeln("		<div class=\"swt76\">");
document.writeln("<div id=\"rightArrow\"> ");
document.writeln("		<div class=\"test ab\" id=\"shake\" style=\"background-image: url(include/Picture/online_arrow.png);display:block; width:35px; height:151px; position:absolute;top:0px; left:0px; z-index:999;\"></div>");
document.writeln("        <div class=\"test1 ab\" id=\"shake1\" style=\"background-image: url(include/Picture/online_arrow.png);background-position: -35px top;display:none; width:34px; height:151px; position:absolute; top:0px; left:0px; z-index:999;\"></div></div>");
document.writeln("        ");
document.writeln("<div id=\"floatDivBoxs\">");
document.writeln("<div class=\"floatShadow\">");
document.writeln("<div class=\"floatyy\">");
document.writeln("");
document.writeln("	<form name=\'tjform\' method=\'post\' action=\'/plus/diy.php\' onsubmit=\'return yzform()\' class=\"material\" target=\"aa\" >");
document.writeln("	<input type=\'hidden\' name=\'action\' value=\'post\' />");
document.writeln("	<ul>");
document.writeln("	<li>您的姓名：<br />");
document.writeln("    <input name=\"xm\" type=\"text\" class=\"floatyy1\"  id=\"xm\" placeholder=\"请输入您的姓名\" required=\"\" />");
document.writeln("    </li>");
document.writeln("    <li>您的电话：<br />");
document.writeln("    <input name=\"tel\" type=\"text\" class=\"floatyy1\" id=\"tel\" placeholder=\"请输入您的电话\" required=\"\" />");
document.writeln("    </li>");
document.writeln("    <li>诊疗项目  :<br />");
document.writeln("        <select name=\"bz\" class=\"floatyy1\">");
document.writeln("        <option value=\"请选择项目\">请选择项目</option>  ");
document.writeln("        <option value=\"牙齿种植\">牙齿种植</option>  ");
document.writeln("		<option value=\"牙齿矫正\">牙齿矫正</option> ");
document.writeln("		<option value=\"牙齿修复\">牙齿修复</option>");
document.writeln("        <option value=\"牙齿美白\">牙齿美白</option> ");
document.writeln("		<option value=\"牙周治疗\">牙周治疗</option>   ");
document.writeln("		<option value=\"儿童齿科\">儿童齿科</option>   ");
document.writeln("		<option value=\"其他牙齿问题\">其他牙齿问题</option>   ");
document.writeln("        </select> ");
document.writeln("");
document.writeln("    </li>");
document.writeln("<input type=\"hidden\" value=\"717\" name=\"wid\">");
document.writeln("<input type=\"submit\" class=\"floatyy2\" value=\"提交预约\">");
document.writeln("<iframe width=\"0\" height=\"0\" frameborder=\"0\" id=\"aa\" name=\"aa\"></iframe>");
document.writeln("</form>");
document.writeln("    </ul>");
document.writeln("</div> ");
document.writeln("");
document.writeln("");
document.writeln("  </div>");
document.writeln("</div>");
document.writeln("</div>");



document.writeln("<script type=\"text/javascript\" src=\"/include/Scripts/zzsc.js\"></script>");