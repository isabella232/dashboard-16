/*
 * 
 */
function configureDashboard() {
    
    $("title").text("XXXXXXXX");
    
    $("#panel-1").find("dtitle").text("NEW TITLE")
    
    $.getJSON("config/dashboard.json",function(data) {
    	  page = data[$("html").attr("id")]
    	  $("title").text(page.title);;
    	});
	
}

