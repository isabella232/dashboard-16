/*
 * 
 */
function configureDashboard() {
	
	$("title").text("XXXXXXXXXXXXXX");
    
    //$("#panel-1").find("dtitle").text("NEW TITLE")
    
    $.getJSON("config/dashboard.json",function(data) {
  	  page = data[$("html").attr("id")];

    	  if (page != null) {
    		  
    		  // Get the panels loop through
    		  panels = page.panels;
        	  for (i in panels) {
        		  p = panels[i]
        		  $(p.id).find("dtitle").text(p.dtitle);
        		  $(p.id).find("iframe").attr("src",p.src);
        	  }
    	  }
    	});
	
}

