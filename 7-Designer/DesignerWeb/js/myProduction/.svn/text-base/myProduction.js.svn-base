var dicobj = new Array();
var ckd_startprice = "";
var ckd_endprice = "";
var designerDicValue = "";
var myProduction ={
	iconN : [{
		"id" : 1,
		"img" : "img/1.png",
		"title" : "카페"
	},{
		"id" : 2,
		"img" : "img/2.png",
		"title" : "식당"
	},{
		"id" : 3,
		"img" : "img/3.png",
		"title" : "패션"
	},{
		"id" : 4,
		"img" : "img/4.png",
		"title" : "화장품"
	},{
		"id" : 5,
		"img" : "img/5.png",
		"title" : "신발,가방"
	},{
		"id" : 7,
		"img" : "img/7.png",
		"title" : "기타상업공간"
	},{
		"id" : 6,
		"img" : "img/6.png",
		"title" : "KIDS"
	},{
		"id" : 8,
		"img" : "img/8.png",
		"title" : "숙박시설"
	},{
		"id" : 9,
		"img" : "img/9.png",
		"title" : "사무공간"
	}],
	initDesignerDicType : function(){
		cm.getApi({
			url:"getDesignerDicType.do",
			data : "",
			onsuccess : function(dt){
				if(dt.status == 200){
					dicobj = dt.obj;
					myProduction.setDesignerDicType(dt.obj);
				}else{
					alert(dt.msg);
				}
			},
			onerror : function(data){
				alert(data);	
			}
		});
	},
	setDesignerDicType : function(obj){
		var html = "";
		for(var i=0;i<obj.length;i++){
			var num = obj[i].ckd_Value;
			if(i==0){
				myProduction.initProductionData(obj[i].id,obj[i].ckd_Value,obj[i].dic_hwName,num,obj[i].ckd_startprice,obj[i].ckd_endprice);
			}
			html += '<li value="'+obj[i].ckd_Value+'" onClick=\'myProduction.initProductionData(\"'+obj[i].id+'\",\"'+obj[i].ckd_Value+'\",\"'+obj[i].dic_hwName+'\",\"'+num+'\",\"'+obj[i].ckd_startprice+'\",\"'+obj[i].ckd_endprice+'\");\' >';
			html += '<i><img src="img/common/o'+num+'.png"/></i>'+obj[i].dic_hwName+'</li>'
		}
		for(var i=0;i<myProduction.iconN.length;i++){
			var icn = myProduction.iconN[i];
			var fls = false;
			for(var j=0;j<obj.length;j++){
				var o = obj[j];
				if(icn.id == o.ckd_Value){
					fls = true;
					break;
				}
			}
			if(!fls){
				html += '<li value="'+icn.id+'" onClick=\'myProduction.onClickOffDicType(\"'+icn.id+'\",\"'+icn.title+'\");\'><i><img  src="'+icn.img+'"/></i>'+icn.title+'</li>'
			}
		}
		$("#dictypeliId").html(html);
	},
	onClickOffDicType : function(ckd_Value,dic_hwName){
		index.params.dicType = dic_hwName;
		index.params.dicValue = ckd_Value;
		index.params.dicobj = dicobj;
		cm.addHtml("html/myProduction/construction.html");
	},
	initProductionData : function(ckd_id,ckd_Value,title,img,startprice,endprice){
		designerDicValue = ckd_id
		ckd_startprice = startprice;
		ckd_endprice = endprice;
		$("#name1pId").html('<i><img style="width:20px;height:20px;" src="img/common/o'+img+'.png"/></i>'+title);
		$("#designerDicPriceId").html("₩ "+ckd_startprice+"~"+ckd_endprice+"<span>원/평</span>");
		var data = "pageNow=1&pageCount=12&ckd_Value="+ckd_Value;
		cm.getApi({
			url:"getCollectionList.do",
			data : data,
			onsuccess : function(dt){		
			console.log(JSON.stringify(dt));
				if(dt.status == 200){
					myProduction.setCollectionHtml(dt);
				}else{
					alert(dt.msg);
				}
			},
			onerror : function(data){
				alert(data);	
			}
		});
	},
	
	setCollectionHtml : function(dt){
		var html = "";
		var obj = dt.obj;
		for(var i=0;i<obj.length;i++){
			var o = obj[i];
			html += '<li style="cursor: pointer;" onclick="myProduction.onclickMyProduction(\''+o.id+'\');"><i><img src="'+o.ckf_url+'" style="width:176px;height: 132px;"/></i>';
			html += '<p class="title">'+o.ckc_hwname+'</p>';
			html += '<p class="xinxiw"><span>'+o.ckc_collect+'</span> <span>889</span><span>'+o.ckc_createTime+'</span></p>';
			html += '</li>';
		}
		document.getElementById("designerCollectionId").innerHTML = html;
		
//		    fenye.innerHTML="";
//			  var pagenum=pageCount/4>5?5:Math.ceil(data.total/20);
//			  for(var i=0;i<pagenum;i++){
//			  	fenye.innerHTML+="<li>"+(i+1)+"</li>";
//			  	var aLi=fenye.getElementsByTagName("li");
//			  	for(var j=0;j<aLi.length;j++){
//			  		aLi[j].index=j;
//			  		aLi[j].onclick=function(){
//			  			var page=4*(this.index);
////			  			fn1(page)
//			  		}
//			  	}
//			  }
	},
	onclickMyProduction : function(collectionId){
		index.params['collectionId'] = collectionId;
		cm.addHtml("html/myProduction/workDetails.html");
		
	},
	onClickaddCollectionId : function(){
		index.params.dicType = '카페';
		index.params.dicValue = 1;
		cm.addHtml("html/myProduction/theNewWork.html");
	},
	designerDicpriceId : function(){
		document.getElementById("designerPriceDivId").style.display = "none";
		document.getElementById("designerUpdateInputId").style.display = "";
		$("#ckd_startpriced").val(ckd_startprice);
		$("#ckd_endprice").val(ckd_endprice);
	},
	designerDicEditId : function(){
		document.getElementById("designerPriceDivId").style.display = "";
		document.getElementById("designerUpdateInputId").style.display = "none";
		var url = "updateDesignerDicTypes.do";
		var postData = "dicTypeId="+designerDicValue+"&ckd_startprice="+ckd_startprice+"&ckd_endprice="+ckd_endprice;
		cm.getApi({
			url : "updateDesignerDicTypes.do",
			data : postData,
			onsuccess : function(dt){
				if(dt.status == "200"){
					ckd_startprice = $("#ckd_startpriced").val();
					ckd_endprice = $("#ckd_endprice").val();
					$("#designerDicPriceId").html("₩ "+ckd_startprice+"~"+ckd_endprice+"<span>원/평</span>");
				}else{
					alert(dt.msg);
				}
			},
			onerror : function(data){
				alert(data);	
			}
		});
	}
};

$(function(){
	//获取设计师擅长领域
	myProduction.initDesignerDicType();
	document.getElementById("addCollectionId").addEventListener("click",myProduction.onClickaddCollectionId);
	$("#designerDicpriceId").click(myProduction.designerDicpriceId);
	$("#designerDicEditId").click(myProduction.designerDicEditId);
});
