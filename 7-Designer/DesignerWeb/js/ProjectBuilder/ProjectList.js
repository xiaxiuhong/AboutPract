var proStatus = "";
var prodicType = "";
var ProjectList = {
	downup: function(event) {
		event.stopPropagation();
		$(".imgarr").toggleClass("imgarr2");
		$(".downup").slideToggle("slow");
	},
	iconN: [{
		"id": 0,
		"img": "img/iconN1.png",
		"title": "전체"
	}, {
		"id": 1,
		"img": "img/icon2.png",
		"title": "카페"
	}, {
		"id": 2,
		"img": "img/icon3.png",
		"title": "식당"
	}, {
		"id": 3,
		"img": "img/icon4.png",
		"title": "패션"
	}, {
		"id": 4,
		"img": "img/icon5.png",
		"title": "화장품"
	}, {
		"id": 5,
		"img": "img/icon6.png",
		"title": "신발,가방"
	}, {
		"id": 6,
		"img": "img/icon8.png",
		"title": "사무공간"
	}, {
		"id": 7,
		"img": "img/icon7.png",
		"title": "KIDS"
	}, {
		"id": 8,
		"img": "img/icon9.png",
		"title": "숙박시설"
	}, {
		"id": 9,
		"img": "img/icon10.png",
		"title": "기타상업공간"
	}],
	initDicTypeInfo: function() {
		var html = "";
		var projectUlId = document.getElementById("projectUlId");
		for(var i = 0; i < ProjectList.iconN.length; i++) {
			var icon = ProjectList.iconN[i];
			var src = icon.img;
			var li = document.createElement("li");
			var span = document.createElement("span");
			li.appendChild(span);
			var img = document.createElement("img");
			img.src = src;
			span.appendChild(img);
			var p = document.createElement("p");
			p.innerHTML = icon.title;
			var it = document.createElement("input");
			it.setAttribute("type", "hidden");
			it.setAttribute("value", i);
			li.appendChild(it);
			li.appendChild(p);
			projectUlId.appendChild(li);
			li.setAttribute("onclick", "ProjectList.ckcType(\"" + i + "\");")
		}
	},
	ckcType: function(dicType) {
		prodicType = dicType == 0 ? "" : dicType;
		ProjectList.initProductionData();
	},
	initProductionData: function() {
		var data = "pageNow=1&pageCount=120000&dicType=" + prodicType + "&ckc_status=" + proStatus;
		cm.getApi({
			url: "getWebDemandList.do",
			data: data,
			onsuccess: function(dt) {
				//					console.log(JSON.stringify(dt));
				if(dt.status == 200) {
					ProjectList.setCollectionHtml(dt);
				} else {
					alert(dt.msg);
				}
			},
			onerror: function(data) {
				alert(data);
			}
		});
	},
	setCollectionHtml: function(dt) {
		var html = "";
		var obj = dt.obj;
		var arr = ['카페', '식당', '패션', '화장품', '신발,가방', '기타상업공간', 'KIDS', '숙박시설', '사무공간'];
		var stu = ['진행중', '마감'];
		var imgs = ['', '']
		function addPerList(){
			for(var i = 0; i < obj.length; i++) {
				var o = obj[i];
				if(obj[i].ckc_hwprovince==""){
					obj[i].ckc_hwprovince="　";
				};
				var cmPhone=obj[i].cm_phone.slice(3,9);
				var cmPhoneFast=obj[i].cm_phone.replace(cmPhone,"******");
				html += '<li onclick="ProjectList.onClickdown(\'' + o.id + '\');"><p>' + cmPhoneFast + '</p><p>' + arr[obj[i].ckc_type - 1] + '</p><p>' + obj[i].ckc_hwprovince + '</p>';
				html += '<p>' + obj[i].ckc_acreage +'평'+'</p><p>' + obj[i].ckc_createTime + '</p>';
				html += '<p>' + stu[obj[i].ckc_status - 2];
				if(o.ckc_status == 3) {
					html += '<span class="listopen"><img src="img/huirarrow.png"/></span>';
				} else {
					html += '<span class="listopen" onclick="ProjectList.onClickdown(\'' + o.id + '\');" ><img src="img/Rarrow.png"/></span>';
				}
				html += '</p></li>';
			}
		}
		addPerList();
		
//		console.log(obj);
		var pageArray = [];
	    var liCount = obj.length;//获取获取记录条数
	    console.log(liCount);
	    
	    var PageSize  =20;//设置每页，你准备显示几条
	    var PageCount  = Math.ceil(liCount/PageSize);//计算出总共页数
	    var currentPage = 1;//设置当前页
	    
	    var i=0;
	    for(i=1; i<=PageCount; i++){
	        $('<li class="pageCo" pageNum="'+i+'" >'+i+'</li>').appendTo('#pageIt ul');//显示分页按钮
	    }
	    
	    var $list =  $('#listCon li');
	    //将添加改为替换
	    $list.each(function(){
//	        pageArray.push(this);
			console.log("tianjia!")
	    });
	    
	    for(i=0;i<10;i++){
	        $('#pagingList').append(pageArray[i]);
	        $("#listCon").css("display","none");
	    }
	    
	    function showPage(whichPage){
	        $('#pagingList').html('');
	        for(i = (whichPage-1)*10; i < 10*whichPage ; i++){
	            $('#pagingList').append(pageArray[i]);
	        }
	    }
	    var a;
	    $('.pageCo').click(function(){
	        a = $(this).attr('pagenum');
	        showPage(a);
	    })
		
		
		
		
		
		
//		for(var i = 0; i < obj.length; i++) {
//			var o = obj[i];
//			if(obj[i].ckc_hwprovince==""){
//				obj[i].ckc_hwprovince="　";
//			};
//			var cmPhone=obj[i].cm_phone.slice(3,9);
//			var cmPhoneFast=obj[i].cm_phone.replace(cmPhone,"******");
//			html += '<li onclick="ProjectList.onClickdown(\'' + o.id + '\');"><p>' + cmPhoneFast + '</p><p>' + arr[obj[i].ckc_type - 1] + '</p><p>' + obj[i].ckc_hwprovince + '</p>';
//			html += '<p>' + obj[i].ckc_acreage +'평'+'</p><p>' + obj[i].ckc_createTime + '</p>';
//			html += '<p>' + stu[obj[i].ckc_status - 2];
//			if(o.ckc_status == 3) {
//				html += '<span class="listopen"><img src="img/huirarrow.png"/></span>';
//			} else {
//				html += '<span class="listopen" onclick="ProjectList.onClickdown(\'' + o.id + '\');" ><img src="img/Rarrow.png"/></span>';
//			}
//			html += '</p></li>';
//		}
		document.getElementById("listCon").innerHTML = html;
	},
	onClickaddCollectionId: function() {
		index.params.dicType = '카페';
		index.params.dicValue = 1;
		cm.addHtml("html/myProduction/theNewWork.html");
	},
	setStatus: function(event) {
		event.stopPropagation();
		proStatus = $(this).val();
		ProjectList.initProductionData();
	},
	onClickdown: function(clienchId) {
		index.params["clienchId"] = clienchId;
		cm.addHtml("html/ts.html");
		//春节期间直接展示提示页面
//		cm.addHtml("html/ProjectBuilder/projectDetails.html");
	},
	onclickID: function() {
		var arr = ['img/iconN1.png', 'img/iconN2.png', 'img/iconN3.png', 'img/iconN4.png', 'img/iconN5.png', 'img/iconN6.png', 'img/iconN7.png', 'img/iconN8.png', 'img/iconN9.png', 'img/iconN10.png'];
		var $this = $(this).index();
		$(this).children("span img").src = "img/iconN2.png";
	}
};

$(function() {
	ProjectList.initDicTypeInfo();
	ProjectList.initProductionData();
	$(".downup li").click(ProjectList.setStatus);
	$(".pArrTog").click(ProjectList.downup);
	$(document).on("click",function(){
        $(".downup").slideUp("slow");
//      if($(".pArrTog span").className=="imgarr imgarr2"){
//      	$(".pArrTog span").className="imgarr";
//			alert("imgarr imgarr2")
//      }
//      $(".imgarr").toggleClass("imgarr2");
   });
	$(".navtwoT li").click(ProjectList.onclickID)
})

//$(function(){
////	setCollectionHtml();
//  var pageArray = [];
////  var liCount = 9;
////  var liCount = obj.length;//获取获取记录条数
//  var PageSize  =20;//设置每页，你准备显示几条
//  var PageCount  = Math.ceil(liCount/PageSize);//计算出总共页数
//  var currentPage = 1;//设置当前页
//  
//  var i=0;
//  for(i=1; i<=PageCount; i++){
//      $('<a class="fenyeBtn" href="javascript:;" pageNum="'+i+'" >'+i+'页　</a>').appendTo('#pageIt');//显示分页按钮
//  }
//  
//  var $list =  $('#listCon li');
//  $list.each(function(){
//      pageArray.push(this);
//  });
//  
//  for(i=0;i<10;i++){
//      $('#pagingList').append(pageArray[i]);
//      $("#listCon").css("display","none");
//  }
//  
//  function showPage(whichPage){
//      $('#pagingList').html('');
//      for(i = (whichPage-1)*10; i < 10*whichPage ; i++){
//          $('#pagingList').append(pageArray[i]);
//      }
//  }
//  var a;
//  $('a').click(function(){
//      a = $(this).attr('pagenum');
//      showPage(a);
//  })
//});