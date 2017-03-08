document.write('<link rel="stylesheet" href="/include/Css/swt.css" />');
// 底部弹窗
document.writeln("<div id=\"footer_swt\">");
document.writeln("    <ul>");
document.writeln("        <li><img src=\"\/include/Images/bottom_01.jpg\"></li>");
document.writeln("        <li><a onclick=\"openZoosUrl();LR_HideInvite();return false;\" href=\"javascript:void(0)\"><img src=\"\/include/Images/bottom_02.jpg\"></a></li>");
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

document.writeln("  <input type=\"text\" name=\"tel\" id=\"telInput\" class=\"aa1\" autocomplete=\"off\">");
document.writeln(" <input type=\"submit\" id=\"callBtn\" value=\"给我回拨\" class=\"aa2\">");
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
document.writeln("<div class=\"swtCenter relative\" id=\"swtCenter\">");
document.writeln("<a href=\"javascript:void(0)\" class=\"closeBtn_swtz\" onclick=\"openZoosUrl();return false;\"></a>");
document.writeln("<a href=\"javascript:;\"  target=\"_self\" class=\"closeBtn_swt\"></a>");
document.writeln("<div class=\"swtCenterdw\"></div>");
document.writeln("</div>");



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