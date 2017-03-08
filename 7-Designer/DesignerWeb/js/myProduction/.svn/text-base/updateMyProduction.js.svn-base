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
			updateMyProduction.setFiles(this.id);
		})
	}
});

var designerPics = new Array();
var collectionId = 0;
var checkid = 1;
var updateMyProduction = {
	initUpdateMyProduction : function(){
		var url = "getCollectionDetail.do";
		collectionId = index.params.collectionId;
		var postData = "collectionId="+collectionId;
		cm.getApi({
			url : url,
			data : postData,
			onsuccess : function(data){
       			if(data.status == 200){
       				$("#productionId").val(data.obj.id);
       				$("#adddicTypeid").val(data.obj.dic_hwName);
       				$("#adddivTypeValueid").val(data.obj.ckc_typevalue);
       				$("#ckc_hwname").val(data.obj.ckc_hwname);
       				$("#provinceNameId").val(data.obj.ckc_hwprovince);
       				$("#theNewWorkCityInputId").val(data.obj.ckc_hwcity);
       				$("#ckc_acreage").val(data.obj.ckc_acreage);
       				updateMyProduction.initFiles(data.obj.collFiles,data.obj.id);
       				
       			}else{
       				alert(data.msg);
       			}
       		},
       		onerror : function(data){
       			alert(data.msg);
       		}
		});
	},
	initFiles : function(collFiles,productionid){
		var uploadFiles = document.getElementById("fileUploadCollectionPicid");
		var html = '<div class="fileInputContainer"><input class="fileInput" type="file" name="designercolPicId" id="designercolPicId" multiple="multiple"/></div>';
		uploadFiles.innerHTML = html;
		for(var i=0;i<collFiles.length;i++){
			var fatherDivid = "fatherDivid"+i
			var div = document.createElement('div');
			div.setAttribute('class', 'fileInputContainer');
			div.style.backgroundImage="url("+collFiles[i].ckf_url+")";
			div.style.float="left";
			var topdiv = document.createElement('div');
			var topdivId = "topdivId"+collFiles[i].id;
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
			div.setAttribute("onMouseOver","updateMyProduction.setTopDiv(\""+topdivId+"\")");
			div.setAttribute("onMouseOut","updateMyProduction.setTopDiv(\""+topdivId+"\")");
			imga.setAttribute("onclick","updateMyProduction.delPic(\""+collFiles[i].id+"\");");
			p.setAttribute("onclick","updateMyProduction.setIndexNum(\""+collFiles[i].id+"\",\""+productionid+"\");");
		}
	},
	setIndexNum : function(ckcfId,productionid){
		var postData = "ckcfId="+ckcfId+"&productionid="+productionid;
		cm.getApi({
			url:"updateDesignerCollfile.do",
			data : postData,
			onsuccess : function(dt){
				alert("Success");
			},
			onerror : function(data){
				alert(data);	
			}
		});
	},
	setFiles : function(){
		var files = document.getElementById("designercolPicId").files;
		var requestData = {
			"collectionId" : collectionId
		};
		cm.uploadFile({
       		url :'updateDesignerCollectionFile.do',
       		data : requestData,
       		files : files,
       		onsuccess : function(data){
       			updateMyProduction.initUpdateMyProduction();
       			alert(data.msg);
       		},
       		onerror : function(data){
       			alert(data.msg);
       		}
       });
		
	},
	setTopDiv : function(topdivId){
		var display = document.getElementById(topdivId).style.display;
		if(display == "none"){
			document.getElementById(topdivId).style.display = "";
		}else{
			document.getElementById(topdivId).style.display = "none";
		}
	},
	delPic : function(ckcfId){
		var postData = "ckcfId="+ckcfId;
		cm.getApi({
			url:"delDesignerCollfile.do",
			data : postData,
			onsuccess : function(dt){
				updateMyProduction.initUpdateMyProduction();
			},
			onerror : function(data){
				alert(data);	
			}
		});
	},
	submitDesignerProduction : function(){
		var id = $("#productionId").val();
		var dic_hwName = $("#adddicTypeid").val();
		var ckc_typevalue = $("#adddivTypeValueid").val();
		var ckc_hwname = $("#ckc_hwname").val();
		var ckc_hwprovince = $("#provinceNameId").val();
		var ckc_hwcity = $("#theNewWorkCityInputId").val();
		var ckc_acreage = $("#ckc_acreage").val();
		var postData = "id="+id+"&dic_hwName="+dic_hwName+"&ckc_typevalue="+ckc_typevalue+"&ckc_hwname="+ckc_hwname+"&ckc_hwprovince="+ckc_hwprovince+"&ckc_hwcity="+ckc_hwcity+"&ckc_acreage="+ckc_acreage;
		cm.getApi({
			url:"saveDesignerCollectionInfo.do",
			data : postData,
			onsuccess : function(dt){
				if(dt.status == "200"){
					cm.addHtml("html/myProduction/myProduction.html");
				}else{
					alert(dt.msg);
				}
			},
			onerror : function(data){
				alert(data);	
			}
		});
	},
	initTheNewWorkProvince : function(){
		var html = "";
		for(var i=0;i<addressJson.length;i++){
			var address = addressJson[i];
			html +="<li onClick='updateMyProduction.onClickProvince(\""+address.name+"\");'>"+address.name+"</li>";
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
		$("#theNewWorkCityId").html(html);
		if(checkid == 1){
			$(".message .arr2").click(updateMyProduction.onClickcityDivId);
		}
		$(".province2 ul li").click(updateMyProduction.onClickCity);
		checkid ++;
		$(".message .arr1").removeClass("img02");
		$(".province1").slideUp("slow");
	},
	onClickCity : function(){
		$(this).addClass("current").siblings().removeClass("current");
		$("#theNewWorkCityInputId").val($(this).text());
		$(".message .arr2").removeClass("img02");
		$(".province2").slideUp("slow");
	},
	onClickcityDivId : function(){
		$(this).toggleClass("img02");
		$(".province2").slideToggle("slow");
	}
};

$(function(){
	$("#fileUploadCollectionPicid").uploadPreview();
	updateMyProduction.initUpdateMyProduction();
	updateMyProduction.initTheNewWorkProvince();
	$(".message .arr1").click(updateMyProduction.inittheDesignerProvince);
	$(".province1 ul li").click(updateMyProduction.onClickProvince);
	document.getElementById("theNewWorkFootId").addEventListener("click",updateMyProduction.submitDesignerProduction);
});
