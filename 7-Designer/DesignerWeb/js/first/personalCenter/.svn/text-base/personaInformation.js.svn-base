var o = {};
var Information = {
	onClickfootcon: function() {
		index.params['o'] = o;
		cm.addChildHtml("html/personalData/EditImproData.html");
	},
//	html/first/personalCenter/EditProfileInformation.html
	initDesignerInfo: function() {
		cm.getApi({
			url: 'getWebDesignerDetailInfo.do',
			data: "",
			onsuccess: function(dt) {
				if(dt.status == 200) {
					Information.personaInformationHtml(dt);
				} else {
					alert(dt.msg);
				}
			},
			onerror: function(data) {
				alert(data.msg);
			}
		});
	},
	personaInformationHtml: function(dt) {
		var html = "";
		o = dt.obj;
		//				-个人头像-
		var ckfUrl =  o.ckf_url != null && "" != o.ckf_url ? o.ckf_url : "../../../img/common/head.png";
		html += '<div class="person" id="person">';
		html += '<div class="personimg" style="border-radius: 34px;"><img style="width:69px;height:69px;" src="' + ckfUrl + '"/></div>';
		html += ' <p class="sex">' + o.cm_hwName + ' <i><img src="img/boy.png" /></i></p>';
		html += '</div>';
		//				<!-- 个人头像描述-->
		html += '<div class="personcon">';
		html += '<div class="words">';
		html += '<textarea>' + o.cku_hwintroduce + '</textarea>';
		html += '</div>';

//		//		    <!--  等级进度条-->
//		html += '<div class="LV">';
//		html += '<div  class="box1"></div>';
//		html += '<div  class="box2"></div>';
//		html += '<ul>';
//		html += '<li>LV0</li><li>LV1</li><li>LV2</li><li>LV3</li><li>LV4</li><li>LV5</li><li>LV6</li>';
//		html += '</ul>';
//		html += '</div>';

		// 	  	   <!--擅长领域-->
		html += '<div class="check">';
		html += '<p>나의 작품</p>';
		html += '	<div class="checkcon" align="center">';
		html += '<ul>';
		var array = ['"img/coffer.png"', '"img/nife.png"', '"img/house.png"', '"img/coffer.png"', '"img/nife.png"', '"img/house.png"'];
		$.each(o.userdicType, function(i, item) {

			html += '<li><span><img src="img/coffer.png"/></span>' + item.ckd_Name + '</li>';
		});

		html += '</ul>';
		html += '</div>';
		html += '</div>';

		// 	  	     <!--擅长领域报价-->
		html += '   <div class="check2">';
		html += '<p>나의 디자인견적</p>';
		html += '	<div class="listcon">';
		html += '<ul>';
		$.each(o.userdicType, function(i, item) {
			//		     	alert(o.userdicType[i]);
			html += '	<li><span><img src="img/coffer.png"/>' + item.ckd_Name + '</span><p><span>' + item.ckd_startprice + '~' + item.ckd_endprice + '</span><span>원 / 평</span></p> </li>';
		});
		html += '</ul>';
		html += '</div>';
		html += '</div>';
		//          <!--  message信息-->
		html += ' <div class=" message">';
		html += '<div class="messagecon">';
		html += '<p>나의 이메일</p>';
		html += '<span >' + o.cku_email + '</span>';
		html += '</div>';
		html += '</div>';
		//   			 省市

		html += ' <div class=" message">';
		html += '<div class="messagecon">';
		html += '<p>나의 도시</p>';
		html += '<span >' + o.cku_hwprovince + '' + o.cku_hwcity + '</span>';
		html += '</div>';
		html += '</div>';
		//		   工作年限
		html += ' <div class=" message">';
		html += '<div class="messagecon">';
		html += '<p>디자인 견력</p>';

		html += ' <span >' + o.cku_year + '<span>년</span></span>';
		html += '</div>';
		html += '</div>';
		html += '</div>';

		document.getElementById("bigbox").innerHTML = html;
	}

};
$(function() {
	Information.initDesignerInfo();
	document.getElementById("footconID").addEventListener("click", Information.onClickfootcon);

});