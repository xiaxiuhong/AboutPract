var projectDetails = {
	initProjectDetails : function(){
		var projectId = index.params.clienchId;
		var postData = "ckc_id="+projectId;
		cm.getApi({
			url : 'getDemandDetail.do',
			data : postData,
			onsuccess: function(dt) {
				if(dt.status == 200) {
					console.log(JSON.stringify(dt));
				} else {
					alert(dt.msg);
				}
			},
			onerror: function(data) {
				alert(data);
			}
		})
	}
};


$(function(){
	//初始化数据
	projectDetails.initProjectDetails();
});
