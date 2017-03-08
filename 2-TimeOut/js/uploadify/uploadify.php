<?php
require_once($WEBSITE_ROOT."/sysconfig/config/config.inc.php");
require_once($WEBSITE_ROOT."/sysconfig/config/function.php");
require_once($WEBSITE_ROOT."/include/db_class.php");
require_once($WEBSITE_ROOT."/include/base_class.php");
$base=new base();
$db=new mysql(MYPRO,false);

/*
Uploadify
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

// Define a destination
$verifyToken = md5('unique_salt' . $_POST['timestamp']);
$targetFolder = $WEBSITE_ROOT.'/attchment/tj/'.$mysj; // Relative to the root
	$randomnum=NULL;
	srand(mktime());
	$randomnum=rand();
	$randomnum=time().$randomnum;


$sj=time();
if (!empty($_FILES) && $_POST['token'] == $verifyToken) {

		$t= $_FILES['Filedata']['name'];
		$tarr=explode("_",$t);
		$tjh=$tarr[0];
		$xm=$tarr[1];

		

	$tempFile = $_FILES['Filedata']['tmp_name'];
	
	$fileParts = pathinfo($_FILES['Filedata']['name']);
	//echo $targetFolder;
	
	if(!file_exists($targetFolder))
	{   
	mkdir($targetFolder);
	chmod($targetFolder, 0777);
	}
	
	$targetPath = $targetFolder;
	$targetFile = rtrim($targetPath,'/') . '/' . $randomnum."_".$tjh.".".$fileParts['extension'];
	$savefile=$mysj."/".$randomnum."_".$tjh.".".$fileParts['extension'];

	if(!file_exists($targetPath))
	{   
	mkdir($targetPath);
	chmod($targetPath, 0777);
	}

	
	// Validate the file type
	if($_POST["lx"]==1){
	$fileTypes = array('jpg','gif','png'); // File extensions
	}
	elseif($_POST["lx"]==2){
	$fileTypes = array('pdf','doc'); // File extensions
	}
	elseif($_POST["lx"]==3){
	$fileTypes = array('mp4','flv'); // File extensions
	}
		
	if (in_array($fileParts['extension'],$fileTypes)) {
		move_uploaded_file($tempFile,$targetFile);
		$pdf=$savefile;
		$sj=time();
		
	
		
		if($tjh!=""){
			
			
			
			$sql="select * from topic91 where tjh='$tjh'";;
			$num=$db->getcount($sql);
			
			if($num>0){//更新
				$sql="update topic91 set pdf=".check_text($pdf).",xm=".check_text($xm)." where tjh=".check_null($tjh);
			}
			else
			{
				$sql="insert into topic91 (tjh,xm,pdf,ctime) values (".check_null($tjh).",".check_text($xm).",".check_text($pdf).",$sj)";
				
			}
			
			//echo $sql;
			$db->exec($sql);
		}

		echo "@".$savefile;
		
		//print_r($_POST);
	} else {
		echo 'Invalid file type.';
	}
}
?>