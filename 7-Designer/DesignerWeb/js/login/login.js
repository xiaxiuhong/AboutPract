var login = {
	btnlogin : function(){
		var phone = $("#loginPhoneId").val();
		var vFcode = $("#yzmInputId").val();
		var data = "phone="+phone+"&vFcode="+vFcode;
		cm.getToken({
			url:"login.do",
			data : data,
			onsuccess : function(dt){
				if(dt.status == 200){
					if(dt.obj.isCheck == "1"){
						window.history.forward(1);
						window.parent.location="index.html";
					}else{
						window.history.forward(1);
						window.parent.location="html/personalData/ImprovData.html";
					}
				}else{
					alert(dt.msg);
				}
				
			},
			onerror : function(data){
				alert(data);	
			}
		});
		
	},
	yzBtnId : function(){
		var loginPhoneId = $("#loginPhoneId").val();
		var data = "phone="+loginPhoneId;
		cm.getApi({
			url:"getVfCode.do",
			data : data,
			onsuccess : function(data){
				var yzm = data.obj.split(":")[1];
				$("#yzmInputId").val(yzm);
			},
			onerror : function(data){
				alert(data);	
			}
		});
	}
};

$(function(){
	cm.initDiv(0,"loginDivId");
//	window.history.forward(1);
	document.getElementById("yzBtnId").addEventListener("click",login.yzBtnId);
	document.getElementById("loginId").addEventListener("click",login.btnlogin);
});
