var radioValue = "1";
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
			designer.setFiles(this.id);
		})
	}
});
var checkId = 1;
var designer = {
	initAddressProvince : function(){
		var html = "";
		for(var i=0;i<addressJson.length;i++){
			var address = addressJson[i];
			html +="<li>"+address.name+"</li>";
		}
		document.getElementById("ulProvinceId").innerHTML = html;
		document.getElementById("ulProvinceId_qy").innerHTML = html;
	},
	radioLDivId : function(){
		document.getElementById("radioLDivId").style.background = "url(../../img/dui.png) no-repeat center left";
		document.getElementById("radioRDivId").style.background = "url(../../img/duik.png) no-repeat center left";
		document.getElementById("zjzDivId").style.display = "";
		document.getElementById("qyzDivId").style.display = "none";
		radioValue = "1";
	},
	radioRDivId : function(){
		document.getElementById("radioLDivId").style.background = "url(../../img/duik.png) no-repeat center left";
		document.getElementById("radioRDivId").style.background = "url(../../img/dui.png) no-repeat center left";
		document.getElementById("zjzDivId").style.display = "none";
		document.getElementById("qyzDivId").style.display = "";
		radioValue = "2";
	},
	provinceDivId : function(){
		$(this).toggleClass("img02");
		$(".province1").slideToggle("slow");
	},
	onClickProvince : function(){
		$(this).addClass("current").siblings().removeClass("current");
		var provinceName = $(this).text();
		$("#provinceInputId").val(provinceName);
		
		$("#provinceInputId_qy").val(provinceName);
		
		$("#theNewWorkCityInputId").val("");
		
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
		$("#addressCityUlId").html(html);
		if(checkId == 1){
			$(".message .arr2").click(designer.onClickCity);
		}
		$(".province2 ul li").click(designer.cityDivId);
		checkId ++;
		$(".message .arr1").removeClass("img02");
		$(".province1").slideUp("slow");
		
	},
	onClickCity : function(name){
		$(this).toggleClass("img02");
		$(".province2").slideToggle("slow");
		
	},
	cityDivId : function(){
		$(this).addClass("current").siblings().removeClass("current");
		$("#addressCityInputId").val($(this).text());
		$(".message .arr2").removeClass("img02");
		$(".province2").slideUp("slow");
	},
	setFiles : function(divId){
		if(divId == "fileUploadzjzPicid"){
			var zjzfiles = document.getElementById("designerzjzPicId").files;
			designer.xmTanUploadImg(zjzfiles,"fileUploadzjzimgid","fileUploadzjzPicid","fileUploadzjzPicid");
		}else if(divId == "fileUploadzjfPicid"){
			var zjffiles = document.getElementById("designerzjfPicId").files;
			designer.xmTanUploadImg(zjffiles,"fileUploadzjfimgid","fileUploadzjfPicid","fileUploadzjfPicid");
		}else{
			var qyfiles = document.getElementById("qydesignerzjzPicId").files;
			designer.xmTanUploadImg(qyfiles,"qyfileUploadzjzimgid","qyfileUploadzjzPicid","qyfileUploadzjzPicid");
		}
	},
	setDivPic : function(files,divId,oldDivId){
		$("#"+divId).css("background-image","url("+files+")");
	},
	xmTanUploadImg : function(files,divid,oldDivId,uploadDivId) {
        var file = files[0];

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
			designer.setDivPic(e.target.result,divid,oldDivId);
        }

        reader.readAsDataURL(file);
   },
   submitBtnId : function(){
       var cm_hwNameId = $("#cm_hwNameId").val();
       var cm_EnName = $("#cm_EnName").val();
       var provinceInputId = $("#provinceInputId").val();
       
       var provinceInputId_qy = $("#provinceInputId_qy").val();
       
       var addressCityInputId = $("#addressCityInputId").val();
       var cm_yearId = $("#cm_yearId").val();
       var cm_emailId = $("#cm_emailId").val();
       var files = new Array();
       if(radioValue == 1){
	       var zjzfiles = document.getElementById("designerzjPicFormId").designerzjzPicId.files;
		   if(zjzfiles){
		   		files.push(zjzfiles[0]);
		   }
		   var zjffiles = document.getElementById("designerzjPicFormId").designerzjfPicId.files;
		   if(zjffiles){
		   		files.push(zjffiles[0]);
		   }
       }else{
       	   var zjffiles = document.getElementById("qydesignerzjPicFormId").designerzjfPicId.files;
		   if(zjffiles){
		   		files.push(zjffiles[0]);
		   }
       }
	   
       var requestData = {
			'cku_userType': radioValue,
			'cm_hwName': cm_hwNameId,
			'cm_enName': cm_EnName,
			'cm_emailId': cm_emailId,
			'cku_hwprovince': provinceInputId,
			
			'cku_hwprovince_qy': provinceInputId_qy,
			
			'cku_hwcity': addressCityInputId,
			'suffix': "jpg",
			'cku_year': cm_yearId
//			'cku_hwintroduce':cm_intro,
//			'cku_userGender':cm_gender,
//			'cku_birthYear':cm_birthYear
		};
       cm.uploadFile({
       		url :'updateDesignerPicInfo.do',
       		data : requestData,
       		files : files,
       		onsuccess : function(data){
       			if(data.status == 200){
       				window.history.forward(1);
					window.parent.location="../../index.html";
       			}else{
       				alert(data.msg);
       			}
       			
       		},
       		onerror : function(data){
       			alert(data.msg);
       		}
       });
   }
};


$(function(){
	//初始化省数据
	designer.initAddressProvince();
	$(".message .arr1").click(designer.provinceDivId);
//	$(".message .dropDown").click(designer.provinceDivId);
	$(".province1 ul li").click(designer.onClickProvince);
	$("#fileUploadzjzPicid").uploadPreview();
	$("#fileUploadzjfPicid").uploadPreview();
	$("#qyfileUploadzjzPicid").uploadPreview();
	
	document.getElementById("radioLDivId").addEventListener("click",designer.radioLDivId);
	document.getElementById("radioRDivId").addEventListener("click",designer.radioRDivId);
	
	
	//綁定提交按鈕點擊事件
	document.getElementById("submitBtnId").addEventListener("click",designer.submitBtnId);
});
