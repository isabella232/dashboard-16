/*
 * 
 */
function configureDashboard() {

    $.getJSON("dashboard.json", function (data) {
        // Use the id attribute of the html tag to lookup our page object
        // associated with this page
        var page = data[$("html").attr("id")];

        $("title").text(page.title)

        // if we do not find the page then there is nothing to do
        if (page != null) {

            // Get the panels array and loop through them
            var panels = page.panels;
            for (var i in panels) {
                p = panels[i]
                // The div id is used to identify each panel
                // set the appropriate data for each of them
                $(p.id).find("dtitle").text(p.dtitle);
                $(p.id).find("iframe").attr("src", p.src);
            }
        }
    });

}
