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
			theNewWork.setFiles(this.id);
		})
	}
});

var designerPics = new Array();
var indexNums = 1;
var checkid = 1;
var theNewWork = {
	initDivtype : function(){
		$("#adddicTypeid").val(index.params.dicType);
		$("#adddivTypeValueid").val(index.params.dicValue);
	},
	initTheNewWorkProvince : function(){
		var html = "";
		for(var i=0;i<addressJson.length;i++){
			var address = addressJson[i];
			html +="<li>"+address.name+"</li>";
		}
		document.getElementById("theNewWorkProvinceId").innerHTML = html;
	},
	inittheDesignerProvince : function(){
		$(this).toggleClass("img02");
		$(".province1").slideToggle("slow");
	},
	onClickProvince : function(){
		$(this).addClass("current").siblings().removeClass("current");
		var provinceName = $(this).text();
		$("#provinceNameId").val(provinceName);
//		$("#theNewWorkCityInputId").val("");
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
//		$("#theNewWorkCityId").html(html);
		if(checkid == 1){
			$(".message .arr2").click(theNewWork.onClickcityDivId);
		}
		$(".province2 ul li").click(theNewWork.onClickCity);
		checkid ++;
		$(".message .arr1").removeClass("img02");
		$(".province1").slideUp("slow");
	},
	onClickCity : function(cityName){
		$(this).addClass("current").siblings().removeClass("current");
//		$("#theNewWorkCityInputId").val($(this).text());
		$(".message .arr2").removeClass("img02");
		$(".province2").slideUp("slow");
	},
	onClickcityDivId : function(){
		$(this).toggleClass("img02");
		$(".province2").slideToggle("slow");
	},
	setFiles : function(divId){
		var files = document.getElementById("designercolPicId").files;
		var uploadFiles = document.getElementById("fileUploadCollectionPicid");
		var html = '<div class="fileInputContainer"><input class="fileInput" type="file" name="designercolPicId" id="designercolPicId" multiple="multiple"/></div>';
		uploadFiles.innerHTML = html;
		for(var i=0;i<files.length;i++){
			designerPics.push(files[i]);
		}
		for(var i=0;i<designerPics.length;i++){
			theNewWork.showFile(designerPics[i],uploadFiles,i);
		}
	},
	showFile : function(file,uploadFiles,i){
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
			theNewWork.addFileToDiv(e.target.result,uploadFiles,i);
        }
        reader.readAsDataURL(file);
	},
	addFileToDiv : function(files,uploadFiles,i){
		var fatherDivid = "fatherDivid"+i
		var div = document.createElement('div');
		div.setAttribute('class', 'fileInputContainer');
		div.style.backgroundImage="url("+files+")";
		div.style.float="left";
		var topdiv = document.createElement('div');
		var topdivId = "topdivId"+i;
		topdiv.setAttribute("id",topdivId);
		topdiv.style.display = "none";
		topdiv.setAttribute('class', 'upload');
		var p = document.createElement('p');
		p.innerHTML = "표지사용";
		topdiv.appendChild(p);
		var span = document.createElement('span');
		var img = document.createElement('img');
		img.src = "img/less.png";
		var imga = document.createElement('a');
		imga.appendChild(img);
		span.appendChild(imga);
		topdiv.appendChild(span);
		div.appendChild(topdiv);
		uploadFiles.appendChild(div);
		
		//设置事件
		div.setAttribute("onMouseOver","theNewWork.setTopDiv(\""+topdivId+"\")");
		div.setAttribute("onMouseOut","theNewWork.setTopDiv(\""+topdivId+"\")");
		imga.setAttribute("onclick","theNewWork.delPic(\""+i+"\",\""+fatherDivid+"\");");
		var indexNum = i+1;
		p.setAttribute("onclick","theNewWork.setIndexNum(\""+indexNum+"\");")
	},
	setTopDiv : function(topdivId){
		var display = document.getElementById(topdivId).style.display;
		if(display == "none"){
			document.getElementById(topdivId).style.display = "";
		}else{
			document.getElementById(topdivId).style.display = "none";
		}
	},
	delPic : function(j,fatherDivid){
		var uploadFiles = document.getElementById("fileUploadCollectionPicid");
		var html = '<div class="fileInputContainer"><input class="fileInput" type="file" name="designercolPicId" id="designercolPicId" multiple="multiple"/></div>';
		uploadFiles.innerHTML = html;
		var newDesignerPics = new Array();
		for(var i=0;i<designerPics.length;i++){
			if(i != j){
				newDesignerPics.push(designerPics[i]);
			}
		}
		designerPics = newDesignerPics;
		for(var i=0;i<designerPics.length;i++){
			theNewWork.showFile(designerPics[i],uploadFiles,i);
		}
	},
	setIndexNum : function(indexNum){
		indexNums = indexNum;
	},
	onClicktheNewWorkFootId : function(){
		var ckc_type = $("#adddivTypeValueid").val();
		var ckc_hwname = $("#ckc_hwname").val();
		var desprovinceInputId = $("#provinceNameId").val();
//		var theNewWorkCityInputId = $("#theNewWorkCityInputId").val();
		var ckc_acreage = $("#ckc_acreage").val();
		var ckc_typeName = $("#adddicTypeid").val();
		var requestData = {
			"ckc_type" : ckc_type,
			"ckc_hwname" : ckc_hwname,
			"desprovinceInputId" : desprovinceInputId,
//			"theNewWorkCityInputId" : theNewWorkCityInputId,
			"ckc_acreage" : ckc_acreage,
			"ckc_typeName" : ckc_typeName,
			"idex" : 0
		};
		cm.uploadFile({
       		url :'saveDesignerCollection.do',
       		data : requestData,
       		files : designerPics,
       		onsuccess : function(data){
       			if(data.status == 200){
       				window.history.forward(1);
					cm.addHtml("html/myProduction/myProduction.html");
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
	theNewWork.initDivtype();
	theNewWork.initTheNewWorkProvince();
	$("#fileUploadCollectionPicid").uploadPreview();
	$(".newAddWork").click(theNewWork.inittheDesignerProvince);
	$(".province1 ul li").click(theNewWork.onClickProvince);
	document.getElementById("theNewWorkFootId").addEventListener("click",theNewWork.onClicktheNewWorkFootId);
	
});
