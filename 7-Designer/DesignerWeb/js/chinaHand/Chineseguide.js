var  chinaHand={
	 chinaguid : function(){
		cm.addHtml("html/chinaHand/MyPoint/Chineseguide.html");
	},
	chinaguidInfo : function(){
		var data = "pageNow=1&pageCount=65000";
		cm.getApi({
			url:'getChinaNewsList.do',
			data :data,
			onsuccess : function(dt){
			console.log(JSON.stringify(dt));
				if(dt.status == 200){
						chinaHand.chinaguidHtml(dt);
				}else{
					alert(dt.msg);
				}
			},
			onerror : function(data){
				alert(data.msg);
			}
		});
	},
	chinaguidHtml : function(dt){
		var html="";
		var o=dt.obj;
		var arr=['카페','식당','패션','화장품','신발,가방','기타상업공간','KIDS','숙박시설','사무공간']
		for (i=0;i<o.length;i++) {
			var odata=o[i]
		html+='<li style="margin-bottom: 10px;">';
		html+='<div class="Left"><img src='+odata.ckf_url+' /></div>';
		html+='<div class="Right">';
		html+='<p class="total">';
		html+='<span class="tital">'+odata.ckn_title+'</span>';
		html+='<span class="data">'+odata.ckn_time+'</span>';
		html+='</p>';
//		html+='<p class="cont">'+odata.ckn_synopsis+' <span class="contName">'+arr[odata.ckn_type]+'</span></p>';
		html+='<p class="cont">'+odata.ckn_synopsis+'</p>';
		html+='</div>';
		html+='</li>';
			}
		document.getElementById("chianID").innerHTML = html;
	}
};
$(function(){
	chinaHand.chinaguidInfo();
})
