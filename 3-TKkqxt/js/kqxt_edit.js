//模态层
function  modal_layer(){
    var modal=document.createElement("div");
    modal.className="modal";
    document.body.appendChild(modal);
    return modal;
}

//在页面中居中显示
function showCenter(obj){
    obj.style.display="block";
    obj.style.left=(document.documentElement.clientWidth-obj.offsetWidth)/2+"px";
    obj.style.top=(document.documentElement.clientHeight-obj.offsetHeight)/2+"px";
    window.onresize=function(){
        showCenter(obj);
    }
}

//拖拽
function drag(obj,title){
    title=title ||obj;
    title.onmousedown=function(ev){
        ev=ev || window.event;
        var disX=ev.clientX-obj.offsetLeft;
        var disY=ev.clientY-obj.offsetTop;
        //发生拖拽
        document.onmousemove=function(ev){
            ev=ev || window.event;
            //console.log("X坐标："+ev.clientX,"Y坐标："+ev.clientY);
            var l=ev.clientX-disX;
            var t=ev.clientY-disY;
            //限制拖拽范围
            if (l<0){//左边
                l=0;
            }
            var screenW=document.documentElement.clientWidth;
            if (l>screenW-obj.offsetWidth){//右边 可视窗口的宽度-div盒子的可见宽度
                l=screenW-obj.offsetWidth;
            }
            if (t<0){//上边
                t=0;
            }
            var screenH=document.documentElement.clientHeight;
            if (t>screenH-obj.offsetHeight){
                t=screenH-obj.offsetHeight;
            }
            obj.style.left=l+"px";
            obj.style.top=t+"px";
        };
        //松开鼠标 停止拖拽
        document.onmouseup=function(){
            document.onmousemove=null;
        };
        return false;
    }
}
//****************************************
//编辑弹框
//医院简介
function editBoxJj(){
    //1. 调用模态层
    var mod=modal_layer();
    //2. 插入编辑弹框
    var oBox=document.createElement("div");
    oBox.className="editBox";
    oBox.innerHTML='<h4>医院简介编辑</h4>'+
        '<a class="closeBtn" href="javascript:;">×</a>'+
        '<form action="" method="post" class="editInfoJj">'+
        '<label><i>简　介:</i><textarea rows="13" cols="55"></textarea></label>'+
        '<button type="button" id="trueBtn">确定修改</button>'+
        '<button type="button" id="falseBtn">关闭</button></form>';
    document.body.appendChild(oBox);
    //3. 在页面中居中显示
    showCenter(oBox);
    //4. 点击H4标题拖拽
    var oH4=oBox.getElementsByTagName("h4")[0];
    drag(oBox,oH4);
    //5.获取并放置
   	var yjCont=$(".yj_text").find("p").html();
   	$('.editInfoJj textarea').val(yjCont).focus();
    
	$("#trueBtn").on("click",function(){
		var yjBj=$(".editInfoJj textarea").val();
		$(".yj_text").find("p").text(yjBj);
		document.body.removeChild(oBox);
        document.body.removeChild(mod);
 		//alert("这里写AJAX");
	});
	$(".editInfoJj textarea").on("keyup",function(event){
        if (event.keyCode==13){
            //事件触发
            $("#trueBtn").trigger("click");
        }
  	});
    //6. 点击closeBtn ，移除oBox和模态层
    var oCloseBtn=oBox.getElementsByClassName("closeBtn")[0];
    oCloseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
    //7. 点击falseBtn ，移除oBox和模态层
    var oFalseBtn=document.getElementById("falseBtn");
    oFalseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
}
//专家版块
function editBoxZj(){
    //1. 调用模态层
    var mod=modal_layer();
    //2. 插入编辑弹框
    var oBox=document.createElement("div");
    oBox.className="editBox";
    oBox.innerHTML='<h4>专家版块编辑</h4>'+
        '<a class="closeBtn" href="javascript:;">×</a>'+
        '<form action="" method="post" class="editInfoZj">'+
        '<label class="selZj"><i>+</i><input type="file" name="file" class="zjFile"/><span>(选择图片)</span></label>'+
        '<div class="InfoZj"><label><i>姓　名:</i><input type="text"/></label>'+
        '<label><i>职　称:</i><input type="text"/></label></div>'+
        '<button type="button" id="trueBtn">确定修改</button>'+
        '<button type="button" id="falseBtn">关闭</button></form>';
    document.body.appendChild(oBox);
    
    //3. 在页面中居中显示
    showCenter(oBox);
    //4. 点击H4标题拖拽
    var oH4=oBox.getElementsByTagName("h4")[0];
    drag(oBox,oH4);
    //5. 点击closeBtn ，移除oBox和模态层
    var oCloseBtn=oBox.getElementsByClassName("closeBtn")[0];
    oCloseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
    //6. 点击falseBtn ，移除oBox和模态层
    var oFalseBtn=document.getElementById("falseBtn");
    oFalseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
}
//****************************************
//渠道
function editBoxQd(){
    //1. 调用模态层
    var mod=modal_layer();
    //2. 插入编辑弹框
    var oBox=document.createElement("div");
    oBox.className="editBox";
    oBox.innerHTML='<h4>渠道编辑</h4>'+
        '<a class="closeBtn" href="javascript:;">×</a>'+
        '<form action="" method="post" class="editInfo">'+
        '<label>渠　道<input type="text"/></label>'+
        '<label>账户名<input type="text"/></label>'+
        '<label>密　码<input type="text"/></label>'+
        '<label>绑定电话<input type="text"/></label>'+
        '<label>操作人<input type="text"/></label>'+
        '<button type="button" id="trueBtn">确定修改</button>'+
        '<button type="button" id="falseBtn">关闭</button></form>';
    document.body.appendChild(oBox);
    
    //3. 在页面中居中显示
    showCenter(oBox);
    //4. 点击H4标题拖拽
    var oH4=oBox.getElementsByTagName("h4")[0];
    drag(oBox,oH4);
    //5. 点击closeBtn ，移除oBox和模态层
    var oCloseBtn=oBox.getElementsByClassName("closeBtn")[0];
    oCloseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
    //6. 点击falseBtn ，移除oBox和模态层
    var oFalseBtn=document.getElementById("falseBtn");
    oFalseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
}
//********************************************
//资源弹框
function editBoxZy(){
    //1. 调用模态层
    var mod=modal_layer();
    //2. 插入编辑弹框
    var oBox=document.createElement("div");
    oBox.className="editBox zyBox";
    oBox.innerHTML='<h4>资源编辑</h4>'+
        '<a class="closeBtn" href="javascript:;">×</a>'+
        '<form action="" method="post" class="editInfoZy">'+
        '<label><i>电　话</i><input type="text"/></label>'+
        '<label><i>手　机</i><input type="text"/></label>'+
        '<label><i>营销QQ</i><input type="text"/></label>'+
        '<label><i>商务ID</i><input type="text"/></label>'+
        '<label><i>预约系统地址</i><input type="text"/></label>'+
        '<label class="labT"><i>快商通账户名+网址</i><input type="text"/>+<input type="text"/></label>'+
        '<label class="labT"><i>挂号网账户名+网址</i><input type="text"/>+<input type="text"/></label>'+
        '<label class="labT"><i>短信平台账户名+网址</i><input type="text"/>+<input type="text"/></label>'+
        '<label class="labT"><i>录音系统账户名+网址</i><input type="text"/>+<input type="text"/></label>'+
        '<label><i>微博</i><input type="text"/></label>'+
        '<label><i>微信公众号</i><input type="text"/></label>'+
        '<label><i>个人微信号</i><input type="text"/></label>'+
        '<button type="button" id="trueBtn">确定修改</button>'+
        '<button type="button" id="falseBtn">关闭</button></form>';
    document.body.appendChild(oBox);
    
    //3. 在页面中居中显示
    showCenter(oBox);
    //4. 点击H4标题拖拽
    var oH4=oBox.getElementsByTagName("h4")[0];
    drag(oBox,oH4);
    //5. 点击closeBtn ，移除oBox和模态层
    var oCloseBtn=oBox.getElementsByClassName("closeBtn")[0];
    oCloseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
    //6. 点击falseBtn ，移除oBox和模态层
    var oFalseBtn=document.getElementById("falseBtn");
    oFalseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
}
//*******************************************
//物料上传弹框
function editBoxWl(){
    //1. 调用模态层
    var mod=modal_layer();
    //2. 插入编辑弹框
    var oBox=document.createElement("div");
    oBox.className="editBox";
    oBox.innerHTML='<h4>物料上传编辑</h4>'+
        '<a class="closeBtn" href="javascript:;">×</a>'+
        '<form action="" method="post" class="editInfoWl">'+
        '<label><i>物料名称</i><input type="text"/></label>'+
        '<label><i>上传时间</i><input type="text"/></label>'+
        '<label><i>上传人姓名</i><input type="text"/></label>'+
        '<button type="button" id="trueBtn">确定修改</button>'+
        '<button type="button" id="falseBtn">关闭</button></form>';
    document.body.appendChild(oBox);
    
    //3. 在页面中居中显示
    showCenter(oBox);
    //4. 点击H4标题拖拽
    var oH4=oBox.getElementsByTagName("h4")[0];
    drag(oBox,oH4);
    //5. 添加修改内容
	var wlDt=[];
	var wlDd2=[];
	wlDt.push($(".wl_list li").find("dt").html());
	wlDd2.push($(".wl_list li").find("dd").eq(1).html());
	$(".editInfoWl").find("input").eq(0).val(wlDt);
	$(".editInfoWl").find("input").eq(2).val(wlDd2);
	var time=new Date();
	var Year=time.getFullYear();
	var Month=time.getMonth()+1;
	var Day=time.getDate();
	var Hour=time.getHours();
	var Min=time.getMinutes();
	var wlDd1=Year+" / "+Month+" / "+Day+"　　"+Hour+" : "+Min;
	console.log(Month);
	$(".editInfoWl").find("input").eq(1).val(wlDd1);
	
	
    //6. 点击closeBtn ，移除oBox和模态层
    var oCloseBtn=oBox.getElementsByClassName("closeBtn")[0];
    oCloseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
    //7. 点击falseBtn ，移除oBox和模态层
    var oFalseBtn=document.getElementById("falseBtn");
    oFalseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
}
//********************************************
//内部讨论弹框
function editBoxTl(){
    //1. 调用模态层
    var mod=modal_layer();
    //2. 插入编辑弹框
    var oBox=document.createElement("div");
    oBox.className="editBox";
    oBox.innerHTML='<h4>内部讨论编辑</h4>'+
        '<a class="closeBtn" href="javascript:;">×</a>'+
        '<form action="" method="post" class="editInfoTl">'+
        '<label><textarea rows="18" cols="70" placeholder="发送你想说的..."></textarea>'+
        '<button type="button" id="trueBtn">发送</button>'+
        '<button type="button" id="falseBtn">取消</button></form>';
    document.body.appendChild(oBox);
    
    //3. 在页面中居中显示
    showCenter(oBox);
    //4. 点击H4标题拖拽
    var oH4=oBox.getElementsByTagName("h4")[0];
    drag(oBox,oH4);
    
    //5.添加内容
    $('.editInfoTl textarea').focus();
    var tlCont;
	$("#trueBtn").on("click",function(){
		tlCont=$(".editInfoTl textarea").val();
		$("<li><a>"+tlCont+"</a></li>").appendTo(".tl_list");
		$(".editInfoTl textarea").val("");
		document.body.removeChild(oBox);
        document.body.removeChild(mod);
 		//alert("这里写AJAX");
	});
	$(".editInfoTl textarea").on("keyup",function(event){
        if (event.keyCode==13){
            //事件触发
            $("#trueBtn").trigger("click");
        }
   });
    //6. 点击closeBtn ，移除oBox和模态层
    var oCloseBtn=oBox.getElementsByClassName("closeBtn")[0];
    oCloseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
    //7. 点击falseBtn ，移除oBox和模态层
    var oFalseBtn=document.getElementById("falseBtn");
    oFalseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
}
//*******************************************
//注册页面注册成功提示框
function showSucBox(delayTime){
	//调用模态层
	var mod=modal_layer();
	
    //创建并插入div
    var sucBox=document.createElement("div");
    sucBox.className="sucBox";
    sucBox.innerHTML='<a href="javascript:;"><img src="images/success_icon.png" alt="" /></a>'+
    		'<p>注册成功</p>'+
    		'<a class="suc_logBtn" href="login_kqxt.html">点击从这里登录</a>';
    document.body.appendChild(sucBox);

    //在页面中居中显示
    showCenter(sucBox);

    var timer;
    function run(){
        //默认1.5秒后自动消失
        timer=setTimeout(function(){
            document.body.removeChild(sucBox);
            document.body.removeChild(mod);
        },delayTime || 1000);
    }
    run();

    //鼠标移入的时候不消失
    sucBox.onmouseover=function(){
        clearTimeout(timer);
    };
    //鼠标移出消失
    sucBox.onmouseout=function(){
        run();
    }
}
//****************************************
function readAgree(){
    //1. 调用模态层
    var mod=modal_layer();
    //2. 插入协议弹框
    var oBox=document.createElement("div");
    oBox.className="readBox";
    oBox.innerHTML='<h4>用户注册协议</h4>'+
        '<a class="closeBtn" href="javascript:;">×</a>'+
        '<div class="xyCont"><p>用户注册协议用户注册协议用户注册协议用户注册协议用户注册协议用户注册协议用户注册协议用户注册协议用户注册协议</p></div>'+
        '<button type="button" id="trueBtn">同意</button>'+
        '<button type="button" id="falseBtn">关闭</button></form>';
    document.body.appendChild(oBox);
    
    //3. 在页面中居中显示
    showCenter(oBox);
    //4. 点击H4标题拖拽
    var oH4=oBox.getElementsByTagName("h4")[0];
    drag(oBox,oH4);
    //5. 点击closeBtn ，移除oBox和模态层
    var oCloseBtn=oBox.getElementsByClassName("closeBtn")[0];
    oCloseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
    //6. 点击falseBtn ，移除oBox和模态层
    var oFalseBtn=document.getElementById("falseBtn");
    oFalseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
}
//****************************************
//弹框内加载html文件
function nagHtml(url1){
    //1. 调用模态层
    var mod=modal_layer();
    //2. 插入协议弹框
    var oBox=document.createElement("div");
    oBox.className="editBox";
    oBox.innerHTML='<h4>编辑</h4>'+
        '<a class="closeBtn" href="javascript:;">×</a>'+
        '<form action="" method="post" class="editInfo">'+
        '<IFRAME src='+url1+' frameBorder=0 scrolling=yes width="100%" height="100%"></IFRAME>'+
        '<button type="button" id="trueBtn">编辑</button>'+
        '<button type="button" id="falseBtn">关闭</button></form>';
    document.body.appendChild(oBox);
    //3. 在页面中居中显示
    showCenter(oBox);
    //4. 点击H4标题拖拽
    var oH4=oBox.getElementsByTagName("h4")[0];
    drag(oBox,oH4);
    //5. 点击closeBtn ，移除oBox和模态层
    var oCloseBtn=oBox.getElementsByClassName("closeBtn")[0];
    oCloseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
    //6. 点击falseBtn ，移除oBox和模态层
    var oFalseBtn=document.getElementById("falseBtn");
    oFalseBtn.onclick=function(){
        document.body.removeChild(oBox);
        document.body.removeChild(mod);
    };
}