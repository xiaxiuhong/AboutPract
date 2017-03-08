var upload = {
	uploaddetial: function() {
		cm.addHtml("html/first/myOrder/UploadInformationIncomplete.html");
	}
};


$(function(){
	$("#uploadID").click(upload.uploaddetial);
	
})