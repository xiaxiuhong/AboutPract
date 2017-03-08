var workDetails = {
	initWorkDetails : function(){
		var url = "";
		var collectionId = index.params.collectionId;
		var postData = "collectionId="+collectionId;
		cm.getApi({
			url : "getCollectionDetail.do",
			data : postData,
			onsuccess : function(dt){
				var html = "";
				if(dt.status == 200){
					$("#collectionId").val(dt.obj.id);
					$("#collectionNameId").val(dt.obj.ckc_typevalue);
					index.params['ckc_typevalue'] = dt.obj.ckc_typevalue;
					index.params['dic_hwName'] = dt.obj.dic_hwName;
					$("#titlepNamePid").html(dt.obj.ckc_hwname);
					var Detail = dt.obj.dic_hwName + "," + dt.obj.ckc_hwprovince + "," + dt.obj.ckc_acreage +"평";
					$("#titlepDetailPid").html(Detail);
					var cf = dt.obj.collFiles;
					for(var i=0;i<cf.length;i++){
						var files = cf[i];
						html += '<li><img style="width:176px;height:132px;" src="'+files.ckf_url+'"/></li>';
					}
				}else{
					alert(dt.msg);
				}
				$("#collectionDetailId").html(html);
			},
			onerror : function(data){
				alert(data);	
			}
		});
	},
	onClickUpdateCollectionId : function(){
		cm.addHtml("html/myProduction/updateMyProduction.html");
	}
};

$(function(){
	workDetails.initWorkDetails();
	document.getElementById("updateCollectionId").addEventListener("click",workDetails.onClickUpdateCollectionId);
});
