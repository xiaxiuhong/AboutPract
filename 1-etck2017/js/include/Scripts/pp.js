$(function(){
	var url = window.location.href;
	var num=url.substr(url.length-1,1);
	if(num==1){
		$('#cn_brand_nav ul li').eq(0).addClass('cn_brand_nav_li_sel');
	}else if(num==2){
		$('#cn_brand_nav ul li').eq(1).addClass('cn_brand_nav_li_sel');
		$('#cn_brand_nav ul li').eq(0).removeClass('cn_brand_nav_li_sel');
		$('#cd_brand1').css('display','none');
		$('#cd_brand2').css('display','block');
	}else if(num==3){
		$('#cn_brand_nav ul li').eq(2).addClass('cn_brand_nav_li_sel');
		$('#cn_brand_nav ul li').eq(0).removeClass('cn_brand_nav_li_sel');
		$('#cd_brand1').css('display','none');
		$('#cd_brand3').css('display','block');	
	}else if(num==4){
		$('#cn_brand_nav ul li').eq(3).addClass('cn_brand_nav_li_sel');
		$('#cn_brand_nav ul li').eq(0).removeClass('cn_brand_nav_li_sel');
		$('#cd_brand1').css('display','none');
		$('#cd_brand4').css('display','block');		
	}else if(num==5){
		$('#cn_brand_nav ul li').eq(4).addClass('cn_brand_nav_li_sel');
		$('#cn_brand_nav ul li').eq(0).removeClass('cn_brand_nav_li_sel');
		$('#cd_brand1').css('display','none');
		$('#cd_brand5').css('display','block');		
	}else if(num==6){
		$('#cn_brand_nav ul li').eq(5).addClass('cn_brand_nav_li_sel');
		$('#cn_brand_nav ul li').eq(0).removeClass('cn_brand_nav_li_sel');
		$('#cd_brand1').css('display','none');
		$('#cd_brand6').css('display','block');			
	}else if(num==7){
		$('#cn_brand_nav ul li').eq(6).addClass('cn_brand_nav_li_sel');
		$('#cn_brand_nav ul li').eq(0).removeClass('cn_brand_nav_li_sel');
		$('#cd_brand1').css('display','none');
		$('#cd_brand7').css('display','block');			
	}else if(num==8){
		$('#cn_brand_nav ul li').eq(7).addClass('cn_brand_nav_li_sel');
		$('#cn_brand_nav ul li').eq(0).removeClass('cn_brand_nav_li_sel');
		$('#cd_brand1').css('display','none');
		$('#cd_brand8').css('display','block');		
	}
})

function aninmating(){
	//品牌介绍
	if($("#cd_brand1:visible")){
		$("#cd_band1_pic1").stop().delay(800).animate({top:"90px",opacity:"1"},500,function(){
			$("#cd_brand_1_h2").stop().animate({left:"400px"},500,function(){
				$("#cd_band1_p1").stop().animate({left:"400px"},500,function(){
					$("#cd_band1_p2").stop().animate({left:"400px"},500)
				})
			})
		})
	}
	
	if($("#cd_brand1:hidden")){
		$("#cd_band1_pic1").css({
			top:"-100px",
			opacity:"0"
		});
		$("#cd_brand_1_h2").css({
			left:"-350px"
		});
		$("#cd_band1_p1").css({
			left:"-1000px"
		});
		$("#cd_band1_p2").css({
			left:"-1000px"
		})
	}
	
	//康贝佳大事记
	if($("#cd_brand2:visible")){
		$("#br_pic1").stop().delay(800).stop().animate({opacity:"1"},300,function(){
			$("#br_pic2").stop().animate({opacity:"1"},300,function(){
				$("#br_pic3").stop().animate({opacity:1},300,function(){
					$("#br_pic4").stop().animate({opacity:"1"},300,function(){
						$("#br_pic5").stop().animate({opacity:"1"},300,function(){
							$("#br_pic6").stop().animate({opacity:"1"},300,function(){
								$("#br_pic7").stop().animate({opacity:"1"},300)
							})
						})
					})
				})
			})
		})
	}
	
	if($("#cd_brand2:hidden")){
		$("#br_pic1").css("opacity","0");
		$("#br_pic2").css("opacity","0");
		$("#br_pic3").css("opacity","0");
		$("#br_pic4").css("opacity","0");
		$("#br_pic5").css("opacity","0");
		$("#br_pic6").css("opacity","0");
		$("#br_pic7").css("opacity","0");
	}
	
	//爱心公益
	if($("#cd_brand3:visible")){
		$("#pub_pic2").delay(900).stop().animate({left:"363px",opacity:"1"},400,function(){
			$("#pub_pic3").animate({right:"30px",opacity:"1"},300,function(){
				$("#pub_pic4").animate({left:"363px",opacity:"1"},400,function(){
				})
			})
		})
	}
	if($("#cd_brand3:hidden")){
		$("#pub_pic2").css({opacity:"0px",left:"-600px"});
		$("#pub_pic3").css({opacity:"0px",right:"-600px"});
		$("#pub_pic4").css({opacity:"0px",left:"-600px"});

	}
	
	//品牌理念
	if($("#cd_brand4:visible")){
		$("#principle_pic1").delay(400).animate({top:"280px"}).animate({opacity:'1'},200,function(){
			$("#principle_pic2").delay(400).animate({top:"330px"}).animate({opacity:'1'},200,function(){
			$("#principle_p").delay(200).animate({top:"360px"},500).animate({opacity:'1'},300);
		});
		});
	}
	if($("#cd_brand4:hidden")){
		$("#principle_pic1").css({opacity:"0",top:"-400px"});
		$("#principle_pic2").css({opacity:"0",top:"-400px"});
		$("#principle_p").css({opacity:"0",top:"-600px"})
	}
	
	//服务理念
	if($("#cd_brand5:visible")){
		$("#server_pic1").stop().animate({opacity:"1"},500,function(){
			$("#server_pic1").stop().animate({opacity:"1"},500,function(){
				$(".server_pic3").stop().animate({opacity:"1"},500,function(){
					$("#server_pic4").stop().animate({opacity:"1"},500)
				})
			})
		})
	}
	if($("#cd_brand5:hidden")){
		$("#server_pic1").css({opacity:"0"});
		$("#server_pic1").css({opacity:"0"});
		$(".server_pic3").css({opacity:"0"});
		$("#server_pic4").css({opacity:"0"});
	}
	
	//品牌荣誉
	if($("#cd_brand6:visible")){
		$("#ward_pic5").stop().animate({left:"620px"},300,function(){
			$("#ward_pic4").stop().animate({left:"352px"},300,function(){
				$("#ward_pic3").stop().animate({left:"885px"},300,function(){
					$("#ward_pic2").stop().animate({left:"620px"},300,function(){
						$("#ward_pic1").stop().animate({left:"352px"});
					})
				})
			})
		})
	}
	if("#cd_brand6:hidden"){
		$("#ward_pic5").css({left:"-250px"});
		$("#ward_pic4").css({left:"-250px"});
		$("#ward_pic3").css({left:"-250px"});
		$("#ward_pic2").css({left:"-250px"});
		$("#ward_pic1").css({left:"-400px"});
	}
	
	//品牌特色
	if($("#cd_brand7:visible")){
		$("#safe_pic1").animate({left:"430px"},300,function(){
			$("#safe_pic2").animate({left:"460px"},300,function(){
				$("#safe_pic3").animate({left:"425px"},300,function(){
					$("#safe_pic4").animate({left:"425px"},300)
				})
			})
		})
	}
	if("#cd_brand7:hidden"){
		$("#safe_pic1").css("left","-300px");
		$("#safe_pic2").css("left","-300px");
		$("#safe_pic3").css("left","-300px");
		$("#safe_pic4").css("left","-300px");
	}
	
	//安全保障
	if($("#cd_brand8:visible")){
		$("#pinpai_t").delay(400).stop().animate({top:"315px"},300,function(){
			$("#pinpai_p").stop().animate({top:"345px"},300,function(){
				$("#pinpai_hc").animate({top:"380px"},300)
			})
		})
	}
	if("#cd_brand8:hidden"){
		$("#pinpai_t").css("top","-100px");
		$("#pinpai_p").css("top","-100px");
		$("#pinpai_hc").css("top","-100px");
	}	
}
	
$(function(){
	//荣誉鼠标效果
	$("#jz_box img").hover(function(){
		$(this).css("opacity","1").siblings("img").css("opacity","1");
		$("#zs_box").css("opacity","0.05");
	},function(){
		$(this).css("opacity","0.05").siblings("img").css("opacity","0.05");
		$("#zs_box").css("opacity","1")
	});
	
	$("#cn_brand_nav li").click(function(){
		$(this).siblings("li").removeClass("cn_brand_nav_li_sel");
		$(this).addClass("cn_brand_nav_li_sel");
		var item_h_li = $("#cn_brand_nav li");  
		var index = item_h_li.index(this);
		$("#cn_brand_bg .brand_box").eq(index).fadeIn('2000').siblings().hide(); 
		aninmating();		
	});
})