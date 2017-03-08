jQuery.fn.extend({
	uploadPreview: function(opts) {
		var _self = this,
			_this = $(this);
		opts = jQuery.extend({
			ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
			Callback: function() {}
		}, opts || {});
		_self.getObjectURL = function(file) {
			var url = null;
			if(window.createObjectURL != undefined) {
				url = window.createObjectURL(file)
			} else if(window.URL != undefined) {
				url = window.URL.createObjectURL(file)
			} else if(window.webkitURL != undefined) {
				url = window.webkitURL.createObjectURL(file)
			}
			return url
		};
		_this.change(function() {
			edit.setFiles();
		})
	}
});
var checkid = 1;

var edit = {
	onClickeditLID: function() {
		cm.addChildHtml("html/first/personalCenter/personaInformation.html");
	},
	onClickeditRID: function() {
		var cku_hwintroduce = $("#jjTextId").val();
		var cku_hwprovince = $("#pointsProvientId").val();
		var cku_hwcity = $("#pointsCityId").val();
		var cku_userGender = $("#radioSexId").val();
		var cku_email = $("#designerEmailId").val();
		var cku_year = $("#designerYearId").val();
		var postData = "cku_hwintroduce="+cku_hwintroduce+"&cku_hwprovince="+cku_hwprovince+"&cku_hwcity="+cku_hwcity;
		postData +="&cku_userGender="+cku_userGender+"&cku_email="+cku_email+"&cku_year="+cku_year;
		cm.getApi({
			url : 'updateDesignerInfo.do',
			data : postData,
			onsuccess : function(data){
       			if(data.status == 200){
       				cm.addChildHtml("html/first/personalCenter/personaInformation.html");
       			}else{
       				alert(data.msg);
       			}
       		},
       		onerror : function(data){
       			alert(data.msg);
       		}
		});
	},
	province1Onclick: function() {
		$(this).toggleClass("img02");
		$(".province1").slideToggle("slow");
	},
	province2Onclick: function() {
		$(this).toggleClass("img02");
		$(".province2").slideToggle("slow");
	},
	province1click: function() {
		$(this).addClass("current").siblings().removeClass("current");
		$("#pointsProvientId").val($(this).text())
	},
	province2click: function() {
		$(this).addClass("current").siblings().removeClass("current");
		$("#pointsCityId").val($(this).text());
	},
	sex: function() {
		$(this).addClass("true").siblings().removeClass("true")
		var divId = $(this)[0].id;
		var cku_userGender = divId == "manId" ? 1 : 2;
		$("#radioSexId").val(cku_userGender);

	},
	setFiles : function(){
		var files = document.getElementById("designercolPicId").files;
		edit.showFile(files[0]);
		var ckuFiles = new Array();
		ckuFiles.push(files[0]);
		cm.uploadFile({
			url : "uploadWebDesignerPic.do",
			data : {},
			files : ckuFiles,
			onsuccess : function(data){
       			if(data.status == 200){
       			}else{
       				alert(data.msg);
       			}
       		},
       		onerror : function(data){
       			alert(data.msg);
       		}
		});
		
	},
	showFile : function(file){
		var reader = new FileReader();
        //读取文件过程方法
        reader.onloadstart = function (e) {
            console.log("开始读取....");
        }
        reader.onprogress = function (e) {
            console.log("正在读取中....");
        }
        reader.onabort = function (e) {
            console.log("中断读取....");
        }
        reader.onerror = function (e) {
            console.log("读取异常....");
        }
        reader.onload = function (e) {
            console.log("成功读取....");
			edit.addFileToDiv(e.target.result);
        }
        reader.readAsDataURL(file);
	},
	addFileToDiv : function(filesInfo){
		$(".personimg .fileInputContainer").css("background-image","url("+filesInfo+")");
		
	},
	initDesignerData : function(){
		var o = index.params.o;
		var cku_userGender = o.cku_userGender;
		var ckfUrl = o.ckf_url != null && "" != o.ckf_url ? o.ckf_url : "../../../img/common/head.png";
		$(".personimg .fileInputContainer").css("background-image","url("+ckfUrl+")");
		var sex = cku_userGender == 1 ? "img/boy.png" : "img/girl.png";
		var spanHtml = o.cm_hwName+"<i><img src=\""+sex+"\" /></i>";
		$("#spansexId").html(spanHtml);
		$("#jjTextId").val(o.cku_hwintroduce);
		$("#pointsProvientId").val(o.cku_hwprovince);
		$("#pointsCityId").val(o.cku_hwcity);
		
		if(cku_userGender == 1){
			$("#manId").addClass("true");
			$("#moverId").removeClass("true");
		}else{
			$("#moverId").addClass("true");
			$("#manId").removeClass("true");
		}
		$("#radioSexId").val(cku_userGender);
		$("#designerEmailId").val(o.cku_email);
		$("#designerYearId").val(o.cku_year);
	},
	initDesignerProvince :function(){
		var html = "";
		for(var i=0;i<addressJson.length;i++){
			var address = addressJson[i];
			html +="<li>"+address.name+"</li>";
		}
		document.getElementById("designerEditProvinceId").innerHTML = html;
	},
	onClickProvince : function(){
		$(this).addClass("current").siblings().removeClass("current");
		var provinceName = $(this).text();
		$("#provinceNameId").val(provinceName);
		var html = "";
		for(var i=0;i<addressJson.length;i++){
			var address = addressJson[i];
			if(provinceName == address.name){
				var cityList = address.list;
				for(var j=0;j<cityList.length;j++){
					var city = cityList[j];
					html +="<li>"+city.name+"</li>";
				}
			}
		}
		$("#designerCityId").html(html);
		if(checkid == 1){
			$(".message .arr2").click(edit.onClickcityDivId);
		}
		$(".province2 ul li").click(edit.onClickCity);
		checkid ++;
		$(".message .arr1").removeClass("img02");
		$(".province1").slideUp("slow");
	},
	onClickcityDivId : function(){
		$(this).toggleClass("img02");
		$(".province2").slideToggle("slow");
	},
	onClickCity : function(){
		$(this).addClass("current").siblings().removeClass("current");
		$("#pointsCityId").val($(this).text());
		$(".message .arr2").removeClass("img02");
		$(".province2").slideUp("slow");
	}

};

$(function() {
	$("#fileUploadCollectionPicid").uploadPreview();
	
	edit.initDesignerData();
	document.getElementById("editLID").addEventListener("click", edit.onClickeditLID);
	document.getElementById("editRID").addEventListener("click", edit.onClickeditRID);
	edit.initDesignerProvince();
	$(".message .arr1").click(edit.province1Onclick);
	$(".province1 ul li").click(edit.onClickProvince);
	$(".radio .radiobutton").click(edit.sex);
	
	

})