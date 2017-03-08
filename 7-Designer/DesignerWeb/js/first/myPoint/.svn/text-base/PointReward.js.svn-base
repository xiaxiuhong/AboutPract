var price = 0;
var change = {
	imgs: [{
		id: 1,
		url: 'img/shopping/iwatchnew.png',
		price: 31880
	}, {
		id: 2,
		url: 'img/shopping/iPadnew.png',
		price: 84880
	}, {
		id: 3,
		url: 'img/shopping/iphone7new.png',
		price: 79880
	}, {
		id: 4,
		url: 'img/shopping/booknew.png',
		price: 154880
	}, {
		id: 5,
		url: 'img/shopping/pannew.png',
		price: 225000
	}],
	onClickchangeID: function() {
		var cku_userIntegration = index.params.cku_userIntegration;
		if(cku_userIntegration > price){
			cm.addChildHtml("html/first/MyPoint/exchange.html");
		}else{
			alert("포인트 적립하셔야 합니다.！","한투인 알림");
		}
	},
	inithqpoints: function() {
		$("#pointsSpanId").html(index.params.myPoint);
	}
};
$(function() {
	change.inithqpoints();
	document.getElementById("changeID").addEventListener("click", change.onClickchangeID);
	$(".gift li").click(function() {
		var index = $(this).index();
		$(this).css('background', ' url(' + change.imgs[index].url + ') no-repeat center').siblings().css('background', '');
		price = change.imgs[index].price;
	});
	
})