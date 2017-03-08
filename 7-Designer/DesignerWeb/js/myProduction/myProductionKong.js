var myProductionKong = {
	onClickaddConectionID : function(){
		cm.addHtml("html/myProduction/construction.html");
	}
};

$(function(){
	document.getElementById("addConectionID").addEventListener("click",myProductionKong.onClickaddConectionID);
});

