<?php
require_once($WEBSITE_ROOT."/sysconfig/config/config.inc.php");
require_once($WEBSITE_ROOT."/sysconfig/config/function.php");
require_once($WEBSITE_ROOT."/include/base_class.php");
require_once($WEBSITE_ROOT."/include/db_class.php");
require_once($WEBSITE_ROOT."/include/wz_class.php");
require_once($WEBSITE_ROOT."/include/360_safe3.php");

$wz=new wz();
$db=new mysql(MYPRO,false);
$base=new base();


if($xm!="" and $wid!=""){

$yzm=RemoveXss($yzm);
if($_SESSION[randcode]!=""){
	if($_SESSION["randcode"]==$yzm){
	
	}
	else
	{
	showalert("验证码输入错误，请重输!");
	gotourl($refer);
	exit;
	}
}

$refer=$_SERVER['HTTP_REFERER'];//记录来源网址
$wid=intval($wid);
$ip=$base->getip();

$xm=RemoveXSS($xm);
$tel=RemoveXSS($tel);
$bqms=RemoveXSS($bqms);


$sql="insert into topic34 (xm,sex,tel,bz,bqms,yysj,ip,wid,suggess,address,age,renshu,qq,zj,pic,t_time) values (".check_text($xm).",".check_null($sex).",".check_text($tel).",".check_text($bz).",".check_text($bqms).",".check_text($yysj).",".check_text($ip).",".check_null($wid).",".check_text($suggess).",".check_text($address).",".check_text($age).",".check_text($renshu).",".check_text($qq).",".check_text($zj).",".check_text($refer).",now())";
changeline(__LINE__);
$db->exec($sql);
if(RemoveXSS($type)!='ajax'){
	showalert("提交成功,稍后我们将会联系您!");
	gotourl($refer);
}
echo "success";
}
?>