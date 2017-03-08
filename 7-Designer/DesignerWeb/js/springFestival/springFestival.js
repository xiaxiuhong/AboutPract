var springFestival = {
	onClickSpringFestival : function(){
		window.history.forward(1);
		window.parent.location="../../index.html";
	}
};

$(function(){
	$("#collectionDivId").click(springFestival.onClickSpringFestival);
});
