$(document).ready(function (){
                shake();
                repeat = setInterval(shake, 7000);//这里repeat是全局，在hideshake函数中清空
				
                $(".test").click(function(){
					$(this).css('display','none'); 
					$(".test1").css('display','block');
					
                });
                $(".test1").click(function(){
				     $(this).css('display','none'); 
					 $(".test").css('display','block');
                });				
                //绑定点击事件
                /*$('#qqShake').bind('click',function(){
                 //$('#qqShake').addClass('qqShake1');
                 if($('#LRfloater0').css('display') == 'block'){
                 $('#LRfloater0 img').eq(1).click();
                 }
                 if($('#LRfloater1').css('display') == 'block'){
                 $('#LRfloater1 area').eq(1).click();
                 }
                 })*/
            });
        //隐藏抖动窗口
            function shakeHide() {
                $('#shake').css('display', 'none');
                setTimeout("shakeShow()", 20000);
            }
        //显示抖动窗口
            function shakeShow() {
                $('#shake').css('display', 'block');
            }
        //窗口抖动
            function shake(es) {
                var a = ['bottom', 'left'], b = 0;
                var u = setInterval(function () {
                    $('#shake').css(a[b % 2], (b++) % 4 < 2 ? 0 : 4);
                    if (b > 17) {
                        clearInterval(u);
                        b = 0;
                    }
                }, 30)

            }
            
var flag=1;
$('#rightArrow').click(function(){
	if(flag==1){
		$("#floatDivBoxs").animate({left: '0px'},300);
		$(this).animate({left: '200px'},300);
		$(this).css('background-position','-35px 0');
		flag=0;
	}else{
		$("#floatDivBoxs").animate({left: '-242px'},300);
		$(this).animate({left: '-4px'},300);
		$(this).css('background-position','0px 0');
		flag=1;
	}
});