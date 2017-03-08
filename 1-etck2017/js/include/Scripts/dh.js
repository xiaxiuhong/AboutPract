$(function(){
	var url = window.location.href;
	var num=url.substr(url.length-1,1);
	if(num==1){
		$('#kemu_nav ul li a').eq(0).addClass('bbp');
	}else if(num==2){
		$('#kemu_nav ul li a').eq(1).addClass('bbp');
		$('#kemu_nav ul li a').eq(0).removeClass('bbp');
		$('#kmbox_2').siblings().attr('class','disnone');
		$('#kmbox_2').attr('class',' ');
	}else if(num==3){
		$('#kemu_nav ul li a').eq(2).addClass('bbp');
		$('#kemu_nav ul li a').eq(0).removeClass('bbp');
		$('#kmbox_3').siblings().attr('class','disnone');
		$('#kmbox_3').attr('class',' ');
	}else if(num==4){
		$('#kemu_nav ul li a').eq(3).addClass('bbp');
		$('#kemu_nav ul li a').eq(0).removeClass('bbp');
		$('#kmbox_4').siblings().attr('class','disnone');
		$('#kmbox_4').attr('class',' ');		
	}else if(num==5){
		$('#kemu_nav ul li a').eq(4).addClass('bbp');
		$('#kemu_nav ul li a').eq(0).removeClass('bbp');
		$('#kmbox_5').siblings().attr('class','disnone');
		$('#kmbox_5').attr('class',' ');
	}else if(num==6){
		$('#kemu_nav ul li a').eq(5).addClass('bbp');
		$('#kemu_nav ul li a').eq(0).removeClass('bbp');
		$('#kmbox_6').siblings().attr('class','disnone');
		$('#kmbox_6').attr('class',' ');	
	}
})
