// JavaScript Document
$(document).ready(function(){

	//var htmlwidth = $(document).width();
	var htmlheight = $(document).height();

//index 
setTimeout("indexdla()",1000);
setTimeout("indexdlb()",1500);
setTimeout("indexdlc()",2000);
setTimeout("indexdld()",2500);

//说明弹窗
var fixedexplain = (htmlheight - 514) / 4;
$(".indexfixed_explain .indexfixed_explain1").css({"margin-top":""+fixedexplain+"px"});

//投稿号
/*var topfixedno = (htmlheight - 583) / 4;
$("#toufixed_no #toufixed_no1").css({"margin-top":""+topfixedno+"px"});*/


//活动投票
$(".top1_right_ul li").hover(function(){
	var top1a = $(".top1_right_ul li").index(this);
	$(".top1_right_ul li a:eq("+top1a+")").animate({top:"0px"});
},function(){
	var top1a = $(".top1_right_ul li").index(this);
	$(".top1_right_ul li a:eq("+top1a+")").animate({top:"123px"});
	})


//勾选案例
/*gouxuananli();
$(".top1_rightul_input li b i").click(function(){
	
  var gouxualeng = $(".top1_rightul_input li").length;
  var gouxuanlengh = $(".top1_rightul_input li b i").index(this);
  var gouxuanshu = 0;

if($(".top1_rightul_input li b i:eq("+gouxuanlengh+")").hasClass("hover")){
     $(".top1_rightul_input li b i:eq("+gouxuanlengh+")").removeClass("hover");
     gouxuananli();
	 
} else {
  
   for(var l = 0; l < gouxualeng; l++){
    var gouxuanhover = $(".top1_rightul_input li b i:eq("+l+")").hasClass("hover");
	if(gouxuanhover == true){ gouxuanshu++; }
   }
	  if(gouxuanshu < 4){
		 $(".top1_rightul_input li b i:eq("+gouxuanlengh+")").addClass("hover");
		 gouxuananli();
	  }
 } 	

})
*/
/* 案例肠  */
$(".top1_rightul_input li b i.anlichang").click(function(){
	
  var gouxualeng = $(".top1_rightul_input li").length;
  var gouxuanlengh = $(".top1_rightul_input li b i.anlichang").index(this);
  var gouxuanshu = 0;

if($(".top1_rightul_input li b i.anlichang:eq("+gouxuanlengh+")").hasClass("hover")){
     $(".top1_rightul_input li b i.anlichang:eq("+gouxuanlengh+")").removeClass("hover");
	 var anlishanchuval = $(".top1_rightul_input li b i.anlichang:eq("+gouxuanlengh+") input").val();	 
	 anlishanchu(anlishanchuval);
     gouxuananli("1");


} else {
  
   for(var l = 0; l < gouxualeng; l++){
    var gouxuanhover = $(".top1_rightul_input li b i.anlichang:eq("+l+")").hasClass("hover");
	if(gouxuanhover == true){ gouxuanshu++; }
   }
   
	  if(gouxuanshu < 2){
		 $(".top1_rightul_input li b i.anlichang:eq("+gouxuanlengh+")").addClass("hover");
	    var anlitianjiaval = $(".top1_rightul_input li b i.anlichang:eq("+gouxuanlengh+") input").val();	
	     anlitianjia(anlitianjiaval);
		gouxuananli("-1");
	  }
 } 	

})
/* 案例胃  */
$(".top1_rightul_input li b i.anliwei").click(function(){
	
  var gouxualeng = $(".top1_rightul_input li").length;
  var gouxuanlengh = $(".top1_rightul_input li b i.anliwei").index(this);
  var gouxuanshu = 0;

if($(".top1_rightul_input li b i.anliwei:eq("+gouxuanlengh+")").hasClass("hover")){
     $(".top1_rightul_input li b i.anliwei:eq("+gouxuanlengh+")").removeClass("hover");
	 var anlishanchuval = $(".top1_rightul_input li b i.anliwei:eq("+gouxuanlengh+") input").val();	 
	 anlishanchu(anlishanchuval);
     gouxuananli("1");


} else {
  
   for(var l = 0; l < gouxualeng; l++){
    var gouxuanhover = $(".top1_rightul_input li b i.anliwei:eq("+l+")").hasClass("hover");
	if(gouxuanhover == true){ gouxuanshu++; }
   }
   
	  if(gouxuanshu < 2){
		 $(".top1_rightul_input li b i.anliwei:eq("+gouxuanlengh+")").addClass("hover");
	    var anlitianjiaval = $(".top1_rightul_input li b i.anliwei:eq("+gouxuanlengh+") input").val();	
	     anlitianjia(anlitianjiaval);
		gouxuananli("-1");
	  }
 } 	

})




})




function indexdla(){
  $(".indexconter_dla dl dt span").animate({ width:"288px" },800);	
  $(".indexconter_dla dl dd").delay(900).fadeIn(800);
}
function indexdlb(){
  $(".indexconter_dlb dl dt span").animate({ width:"92px" },800);	
  $(".indexconter_dlb dl dd").delay(900).fadeIn(800);
}
function indexdlc(){
  $(".indexconter_dlc dl dt span").animate({ width:"150px" },800);	
  $(".indexconter_dlc dl dd").delay(900).fadeIn(800);
}
function indexdld(){
  $(".indexconter_dld dl dt span").animate({ width:"184px" },800);	
  $(".indexconter_dld dl dd").delay(900).fadeIn(800);
}


//说明弹窗
function fixedexplainshow(){
  	$(".indexfixed_explain").fadeIn(100);
}
function fixedexplainhide(){
  	$(".indexfixed_explain").fadeOut(100);
}


//投稿号
function topfixedshow(id){
	  $("#toufixed_no").fadeIn();
	  $("#tc").attr("src","tc.php?id="+id);
}
function topfixedhide(){
      $("#toufixed_no").fadeOut();
}

//js静态切换
function jingtaiqh(cursel,n,name){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById("div_"+name+"_"+i);
	  menu.className=i==cursel?"hover":"";
	  con.style.display=i==cursel?"block":"none";	 
	} 
  }

//勾选案例投票
/*function gouxuananli(){
var gouxualeng = $(".top1_rightul_input li").length;
var gouxuanshu = 0, weigoushu = 0;
var gouxuanyx,gouxuanwx;
 for(var l = 0; l < gouxualeng; l++){
    var gouxuanhover = $(".top1_rightul_input li b i:eq("+l+")").hasClass("hover");

	if(gouxuanhover == true){
	  gouxuanshu++;
	  if(gouxuanshu <= 4){
	   var gouxuanyx = gouxuanshu;
	   var gouxuanwx = 4 - gouxuanshu;
	   $("#gouxuangxs").html(gouxuanyx); 
	   $("#gouxuanwxs").html(gouxuanwx);
	  }
	} else {
		weigoushu++;
		if(gouxualeng == weigoushu){
		 $("#gouxuangxs").html(0); 
		 $("#gouxuanwxs").html(4);
			}
		} 
 }
 
 }*/

function gouxuananli(i){
var gouxuanshu = $("#gouxuangxs").html();
var weigoushu = $("#gouxuanwxs").html();
if(i < 0){
	gouxuanshu++;
	weigoushu--;
	   $("#gouxuangxs").html(gouxuanshu); 
	   $("#gouxuanwxs").html(weigoushu);
} else {
	gouxuanshu--;
	weigoushu++;
	   $("#gouxuangxs").html(gouxuanshu); 
	   $("#gouxuanwxs").html(weigoushu);
}

 
 }

function anlitianjia(val){
	
}

function anlishanchu(val){
	
}

