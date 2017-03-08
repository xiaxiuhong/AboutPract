var myComment = {
	initDesignerDicType: function() {
		//		******************分页传递参数*******************************
		var data = "pageNow=1&pageCount=12";
		cm.getApi({
			url: "queryDesignerEvaluation.do",
			data: data,
			onsuccess: function(dt) {
				if(dt.status == "200") {
					myComment.setHtml(dt.obj);
				} else {
					alert(dt.msg);
				}
			},
			onerror: function(data) {
				alert(data);
			}
		});
	},
	//	*******************************
	setDesignerDicType: function(obj) {
		var html = "";
		for(var i = 0; i < obj.length; i++) {
			var num = obj[i].ckd_Value + 1;
			html += '<li value="' + obj[i].ckd_Value + '" onClick=\'myProduction.initProductionData(\"' + obj[i].ckd_Value + '\");\' ><i><img src="img/iconN' + num + '.png"/></i>' + obj[i].dic_hwName + '</li>'
		}
		for(var i = 0; i < myProduction.iconN.length; i++) {
			var icn = myProduction.iconN[i];
			var fls = false;
			for(var j = 0; j < obj.length; j++) {
				var o = obj[j];
				if(icn.id == o.ckd_Value) {
					fls = true;
					break;
				}
			}
			if(!fls) {
				html += '<li value="' + icn.id + '" onClick=\'myProduction.onClickOffDicType(\"' + icn.id + '\",\"' + icn.title + '\");\'><i><img  src="' + icn.img + '"/></i>' + icn.title + '</li>'
			}
		}
		$("#dictypeliId").html(html);
	},
	anclenID: function() {
		
		
		

	},
	setHtml: function(obj) {
		html = "";
		for(var i = 0; i < obj.length; i++) {
			var o = obj[i];
			html += '<div class="count"><ul class="person">';
			html += '<li><img style="width:43px;height:43px;border-radius: 21px;" src="' + o.ckf_url + '"/></li>';
			html += '<li>' + o.cm_phone + '</li>';
			var dicName = dicType.classification[o.cke_type];
			html += '<li>' + dicName + ', ' + o.ckc_hwprovince + ', ' + o.ckc_acreage + '평</li>';
			html += '<li>' + o.cke_createTime + '</li></ul>';
			html += '<p class="word">' + o.cke_hwComments + '</p>';
			//评论图片
			if(o.evalFile.length > 0) {
				html += '<ul class="picture">';
				for(var j = 0; j < o.evalFile.length; i++) {
					var ovalFile = o.evalFile[i];
					html += '<li></li>';
				}

				html += '</ul>';
			}
			//评论星星
			html += '<ul class="star"><li>온타임';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i></li>';

			html += '<li>실력평가';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i></li>';

			html += '<li>만족도';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i>';
			html += '<i><img src="img/staryes.png"/></i></li>';
			html += '</ul>';

			var reply = o.reply;
			if(reply.id != 0) {
				html += '<div class="huifu">';
				html += '<span>回复：</span>';
				html += '<p>'+reply.common+'</p>';
				html += '<span>'+reply.replyTime+'</span>';
				html += '</div>';
			}else{
//				html += '<div class="ancle">';
//				html += '<input type="text" class="Input" placeholder="请输入内容" />';
//				html += '<div class="anclen"><img src="img/huifu.png" /></div>';
//				html += '</div>';
			}
			html += '</div>';
		}
		$("#myCommentId").html(html);
		$(".anclen").click(myComment.anclenID);
	}

};

$(function() {
	myComment.initDesignerDicType();
})