/*banner下面的浮动条*/
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 411) {
            $("#nav").css({ "position": "fixed", "top": "0px", "z-index": "999" });
        } else {
            $("#nav").css({ "position": "static" });
        }
    });
    $('#sub_nav a').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 0 && $(window).scrollTop() < 650) {
            $('#sub_nav li:eq(0)').addClass('current').siblings().removeClass('current');
        } else if ($(window).scrollTop() >= 650 && $(window).scrollTop() < 1500) {
            $('#sub_nav li:eq(1)').addClass('current').siblings().removeClass('current');
        } else if ($(window).scrollTop() >= 1500 && $(window).scrollTop() < 2100) {
            $('#sub_nav li:eq(2)').addClass('current').siblings().removeClass('current');
        } else if ($(window).scrollTop() >= 2100 && $(window).scrollTop() < 2470) {
            $('#sub_nav li:eq(3)').addClass('current').siblings().removeClass('current');
        } else if ($(window).scrollTop() >= 2470 && $(window).scrollTop() < 2800) {
            $('#sub_nav li:eq(4)').addClass('current').siblings().removeClass('current');
        } else if ($(window).scrollTop() >= 2800 && $(window).scrollTop() < 3200) {
            $('#sub_nav li:eq(5)').addClass('current').siblings().removeClass('current');
        } else if ($(window).scrollTop() >= 3200 && $(window).scrollTop() < 8000) {
            $('#sub_nav li:eq(6)').addClass('current').siblings().removeClass('current');
        }
    });
})




/*banner下面的浮动条*/
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {
            $("#con_r").css({ "position": "fixed", "top": "52px", "z-index": "999", "margin-left": "860px" });
        } else {
            $("#con_r").css({ "position": "static", "margin-left": "0px" });
        }
    });


})




// JavaScript Document
$(document).ready(function() {
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });
});

/*切换代码*/
function linkclick(obj, id, obj2) {

    for (var i = 1; i < 15; i++) {

        objLink = document.getElementById(obj + i.toString());
        if (objLink) {
            if (id == i) {
                objLink.className = obj + "_click";
            } else {
                objLink.className = obj + "_normal";
            }
        } else break;
    }
}



/*按钮效果*/
function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d = document;
    if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length,
            a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i]; }
    }
}

function MM_findObj(n, d) { //v4.01
    var p, i, x;
    if (!d) d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n);
    return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0,
        x, a = MM_swapImage.arguments;
    document.MM_sr = new Array;
    for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x;
            if (!x.oSrc) x.oSrc = x.src;
            x.src = a[i + 2]; }
}

/*导航下拉*/
$(function() {

    $(".js_solution").hover(function() {
        $(this).addClass("on");
        $(this).prev("em").css("border-right", "2px solid #fff");
        $("dd", this).slideDown(400);
    }, function() {
        $(this).removeClass("on");
        $(this).prev("em").css("border-right", "2px solid #d5d5d5");
        $("dd", this).hide();
    });

})


/*顶部下拉切换*/
function box(ntag, ncontent, index, count) {
    for (i = 1; i < count + 1; i++) {
        if (i == index) {
            document.getElementById(ntag + i).className = "bbp";
            document.getElementById(ncontent + i).className = "";
        } else {
            document.getElementById(ntag + i).className = "";
            document.getElementById(ncontent + i).className = "disnone";
        }
    }
}