
//2. 从样式中style中拿到初始值
function getStyle(obj,styleName){
    var value=obj.currentStyle ? obj.currentStyle[styleName]:getComputedStyle(obj,false)[styleName];

    //判断运动方式是不是透明度
    if (styleName=="opacity"){
        value=Math.round(parseFloat(value)*100);
    }else{
        value=parseInt(value);
    }
    return value;
}
//alert(getStyle(oDiv,"zIndex"));//必须先设置样式
//3. 封装动画函数
function move(obj,modeJson,fn,time){//封装move函数  形参：obj操作对象；modeJson{mode宽高left等运动方式 end终点}；fn:回调函数；time运动时间（传实参的时候可以省略）
    //预定义速度--------------------------------
    var preSpeed={
        "verySlow":2000,
        "slow":1200,
        "normal":800,
        "fast":600,
        "veryFast":300
    };
    if (time){//如果实参中输入了time 判断是否为字符串  如果是字符串在对象中招对应的；如果实参中没有输入time 则nomal
        if (typeof time=="string"){
            time=preSpeed[time];
        }
    }else {
        time=preSpeed.normal;
    }

    //变化距离分段------------------------------
    var start={};//起点为空对象  往里加
    var dis={};//distance距离 为空对象 往里加
    for(var key in modeJson){
        start[key]=getStyle(obj,key);//等价于得到start={“width":200,"height":200,"opacity":100}
        dis[key]=modeJson[key]-start[key];//距离=终点-起点（对象值）
    }
    //console.log(start,dis);

    var count=parseInt(time/30);// 计数器：每一段时间
    var n=0;//计数器：初始步数
    clearInterval(obj.timer);

    //定时器------------------------------------
    obj.timer=setInterval(function(){
        n++;
        var a=1-n/count;

        for(var key in modeJson){
            //开始动画
            var step=start[key]+dis[key]*(1-a*a*a);// 每一次运动的步进长度

            if (key=="opacity"){//运动方式为透明度时  透明度渐变
                obj.style.opacity=step/100;
                obj.style.filter='alpha(opacity='+step+')';
            }else {
                obj.style[key]=step+"px";
            }
        }

        //停止动画
        if(n==count){
            clearInterval(obj.timer);
            fn && fn();
        }
    },30)
}