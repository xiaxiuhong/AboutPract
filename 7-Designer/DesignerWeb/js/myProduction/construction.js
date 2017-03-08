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
			construction.setFiles(this.id);
		})
	}
});
var designerPics = new Array();
var indexNums = 1;
var checkid = 1;
var construction = {
	dicTypes : [{
		"value" : 1,
		"img" : "img/1.png",
		"title" : "카페"
	},{
		"value" : 2,
		"img" : "img/2.png",
		"title" : "식당"
	},{
		"value" : 3,
		"img" : "img/3.png",
		"title" : "패션"
	},{
		"value" : 4,
		"img" : "img/4.png",
		"title" : "화장품"
	},{
		"value" : 5,
		"img" : "img/5.png",
		"title" : "신발,가방"
	},{
		"value" : 7,
		"img" : "img/7.png",
		"title" : "기타상업공간"
	},{
		"value" : 6,
		"img" : "img/6.png",
		"title" : "KIDS"
	},{
		"value" : 8,
		"img" : "img/8.png",
		"title" : "숙박시설"
	},{
		"value" : 9,
		"img" : "img/9.png",
		"title" : "사무공간"
	}],
	initDesignerDicType : function(){
		var dicObj = index.params.dicobj;
		var dic_hwName = index.params.dicType;
		var ckd_Value = index.params.dicValue;
		var html = "";
		for(var i=0;i<construction.dicTypes.length;i++){
			dt = construction.dicTypes[i];
			var fls = false;
			if(dicObj && dicObj.length > 0){
				for(var j=0;j<dicObj.length;j++){
					if(dt.value == dicObj[j].ckd_Value){
						fls = true;
						break;
					}
				}
				if(ckd_Value == dt.value){
					html += '<li value="'+dt.value+'" class="current" onClick=\'construction.onClickDivType(\"'+dt.value+'\",\"'+dt.title+'\",\"'+i+'\");\' >'+dt.title+'</li>';
					construction.initDicTypeInfo(dt);
				}else{
					if(!fls){
						html += '<li value="'+dt.value+'" onClick=\'construction.onClickDivType(\"'+dt.value+'\",\"'+dt.title+'\",\"'+i+'\");\' >'+dt.title+'</li>';
					}else{
						html += '<li value="'+dt.value+'" style="background-color: rgb(230,230,230);" readonly="readonly">'+dt.title+'</li>';
					}
				}
				
			}else{
				if(i == 0){
					html += '<li value="'+dt.value+'" class="current" onClick=\'construction.onClickDivType(\"'+dt.value+'\",\"'+dt.title+'\",\"'+i+'\");\' >'+dt.title+'</li>';
					construction.initDicTypeInfo(dt);
				}else{
					html += '<li value="'+dt.value+'" onClick=\'construction.onClickDivType(\"'+dt.value+'\",\"'+dt.title+'\",\"'+i+'\");\' >'+dt.title+'</li>';
				}
			}
			
		}
		$("#dicTypeId").html(html);
	},
	initDicTypeInfo : function(dt){
		$("#divPtextId").html(dt.title);
		$("#ckc_type").val(dt.value);
		$("#ckc_typeName").val(dt.title);
	},
	initdesAddressProvince : function(){
		var html = "";
		for(var i=0;i<addressJson.length;i++){
			var address = addressJson[i];
			html +="<li>"+address.name+"</li>";
		}
		document.getElementById("desulProvinceId").innerHTML = html;
	},
	onClickProvince : function(){
		$(this).addClass("current").siblings().removeClass("current");
		var provinceName = $(this).text();
		$("#provinceNameId").val(provinceName);
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
		$("#NewWorkCityId").html(html);
		if(checkid == 1){
			$(".message .arr2").click(construction.onClickcityDivId);
		}
		$(".province2 ul li").click(construction.onClickCity);
		checkid ++;
		$(".message .arr1").removeClass("img02");
		$(".province1").slideUp("slow");
	},
	onClickcityDivId : function(){
		$(this).toggleClass("img02");
		$(".province2").slideToggle("slow");
	},
	onClickCity : function(cityName){
		$(this).addClass("current").siblings().removeClass("current");
		$("#NewWorkCityInputId").val($(this).text());
		$(".message .arr2").removeClass("img02");
		$(".province2").slideUp("slow");
	},
	desprovinceDivId : function(){
		$(this).toggleClass("img02");
		$(".province1").slideToggle("slow");
	},
	onClickDivType : function(value,title,i){
		$("#divPtextId").html(title);
		$("#ckc_type").val(value);
		$("#ckc_typeName").val(title);
		var childs = document.getElementById("dicTypeId").childNodes;
		for(var j=0;j<childs.length;j++){
			if(j == i){
				childs[j].setAttribute("class","current");
			}else{
				childs[j].removeAttribute("class");
			}
		}
//		childs[i].addClass("current").siblings("li").removeClass("current");
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
			construction.showFile(designerPics[i],uploadFiles,i);
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
			construction.addFileToDiv(e.target.result,uploadFiles,i);
        }
        reader.readAsDataURL(file);
	},
	setTopDiv : function(topdivId){
		var display = document.getElementById(topdivId).style.display;
		if(display == "none"){
			document.getElementById(topdivId).style.display = "";
		}else{
			document.getElementById(topdivId).style.display = "none";
		}
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
		div.setAttribute("onMouseOver","construction.setTopDiv(\""+topdivId+"\")");
		div.setAttribute("onMouseOut","construction.setTopDiv(\""+topdivId+"\")");
		imga.setAttribute("onclick","construction.delPic(\""+i+"\",\""+fatherDivid+"\");");
		var indexNum = i+1;
		p.setAttribute("onclick","construction.setIndexNum(\""+indexNum+"\");")
	},
	setIndexNum : function(indexNum){
		indexNums = indexNum;
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
			construction.showFile(designerPics[i],uploadFiles,i);
		}
	},
	submitBtnDivId : function(){
		var ckc_type = $("#ckc_type").val();
		var ckd_startprice = $("#ckd_startprice").val();
		var ckd_endprice = $("#ckd_endprice").val();
		var ckc_hwname = $("#ckc_hwname").val();
		var desprovinceInputId = $("#desprovinceInputId").val();
		var ckc_acreage = $("#ckc_acreage").val();
		var ckc_typeName = $("#ckc_typeName").val();
		var requestData = {
			"ckc_type" : ckc_type,
			"ckd_startprice" : ckd_startprice,
			"ckd_endprice" : ckd_endprice,
			"ckc_hwname" : ckc_hwname,
			"desprovinceInputId" : desprovinceInputId,
			"ckc_acreage" : ckc_acreage,
			"ckc_typeName" : ckc_typeName,
			"idex" : indexNums
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
	$("#fileUploadCollectionPicid").uploadPreview();
	$("#ckc_type").val(1);
	$("#ckc_typeName").val('카페');
	construction.initdesAddressProvince();
	construction.initDesignerDicType();
	$(".message .arr1").click(construction.desprovinceDivId);
	$(".province1 ul li").click(construction.onClickProvince);
	document.getElementById("submitBtnDivId").addEventListener("click",construction.submitBtnDivId);

});
	
