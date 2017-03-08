var uploadDataComplete = {
	Complete: function() {
		cm.addHtml("html/ProjectBuilder/projectDetails.html");
	}
};


$(function(){
	
	$(".foot").click(uploadDataComplete.Complete);
	
})