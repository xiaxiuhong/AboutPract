var ckm_type = 2;
var systemMessage = {
	onClickaddCollectionId: function() {
		var divId = this.id;
		var className = this.className;
		if(divId == "systemMessagepId" && className != "current"){
			$("#"+divId).addClass("current");
			$("#orderMessagepId").removeClass("current");
			document.getElementById("sysMessageId").style.display = "";
			document.getElementById("orderMessageId").style.display = "none";
			ckm_type = 2;
			
		}else if(divId == "orderMessagepId" && className != "current"){
			$("#"+divId).addClass("current");
			$("#systemMessagepId").removeClass("current");
			document.getElementById("sysMessageId").style.display = "none";
			document.getElementById("orderMessageId").style.display = "";
			ckm_type = 3;
		}
	},
	initMessageInfo : function(){
		var postData = "pageNow=1&pageCount=10&ckm_type="+ckm_type;
		cm.getApi({
			url : 'getCmKfigureMessage.do',
			data : postData,
			onsuccess : function(data){
//				console.log(JSON.stringify(data));
       			if(data.status == 200){
       				var obj = data.obj;
       				systemMessage.setMessageHtml(obj);
       			}else{
       				alert(data.msg);
       			}
       		},
       		onerror : function(data){
       			alert(data.msg);
       		}
		});
	},
	setMessageHtml : function(obj){
		var html = "";
		for(var i=0;i<obj.length;i++){
			var o = obj[i];
			html += '<li><span>'+o.ckm_createTime+'</span><p>'+o.ckm_hwmsg+'</p></li>';
			//是否有按钮<i>자세히보기</i></li>
		}
		$("#sysUlId").html(html);
	}
};
$(function() {
	$("#systemMessagepId").click(systemMessage.onClickaddCollectionId);
	$("#orderMessagepId").click(systemMessage.onClickaddCollectionId);
	systemMessage.initMessageInfo();
	

})