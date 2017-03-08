var  myBill={
	myorderupload : function(){
 	cm.addChildHtml("html/first/myOrder/myOrderupload.html");
		
	},
	initBillData: function() {
		var data = "pageNow=1&pageCount=12";
		cm.getApi({
			url: "getClinchList.do",
			data: data,
			onsuccess: function(dt) {
					console.log(JSON.stringify(dt));
				if(dt.status == 200) {
					myBill.myBillListHtml(dt);
				} else {
					alert(dt.msg);
				}
			},
			onerror: function(data) {
				alert(data);
			}
		});
	},
	myBillListHtml : function(dt) {
		var html = "";
		var obj = dt.obj;
		var arr = ['카페', '식당', '패션', '화장품', '신발,가방', '기타상업공간', 'KIDS', '숙박시설', '사무공간'];
		var stu = ['진행중', '마감','已投标', '未中标'];
		var imgs = ['', '']
		for(var i = 0; i < obj.length; i++) {
			var o = obj[i];
			html += '<li><p>' + o.ckd_id + '</p><p>' + arr[o.ckc_type - 1] + '</p><p>' + o.ckc_hwprovince + '</p>';
			html += '<p>' + o.ckc_acreage + '</p><p>' +o.ckc_acreage + '</p>';
			html += '<p>' + stu[obj[i].ckc_status - 2];
			if(o.ckc_status == 2||o.ckc_status ==3 ) {
				html += '<span class="listopen" onclick="ProjectList.onClickdown(\''+o.id+'\');" ><img src="img/huirarrow.png"/></span>';
			} else {
				html += '<span class="listopen" onclick="ProjectList.onClickdown(\''+o.id+'\');" ><img src="img/Rarrow.png"/></span>';
			}
			html += '</p></li>';
		}
		document.getElementById("listCon").innerHTML = html;
	},
	
	
	downup: function() {
		$(".imgarr").toggleClass("imgarr2");
		$(".downup").slideToggle("slow");
	},
	onClickdown: function(clienchId) {
		index.params["clienchId"] = clienchId;
		cm.addHtml("html/ProjectBuilder/projectDetails.html");
	},
};
 $(function(){
	myBill.initBillData();
  	$(".listCon .listopen").click(myBill.myorderupload);
	$(".imgarr").click(myBill.downup);
});