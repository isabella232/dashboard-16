Cisco Pilot Dashboard
=====================

Repository for artifacts for the Cisco pilot

Prerequisites
------------
* Maven 3.2.1 or later


### Running Locally

1. Peform a clean build and install. NOTE: The first time this is run maven will download any needed dependencies
    ```bash
    $ mvn clean install
    ```
2. Run in a local Tomcat server
    ```bash
    $ mvn tomcat7:run
    ```
3. Output similary to the following means that the dashboard is running on the localhost on port 8080:
    ```bash
    INFO: Starting ProtocolHandler ["http-bio-8080"]
    ```

### Code Overview
The code consists of HTML5/CSS and default bahavior provided by Javascript. [Blocks](http://demo.bootstraptor.com/blocks.html) templates are used for the dashboard layout

1. The landing page for the dashboard is `index.html` located at `src/main/webapp/index.html`.
2. There are four child pages that are used for the detailed dashboards for each of the respective groups of servers:

* `jabber-servers.html`
* `java-servers.html`
* `mysql-servers.html`
* `web-servers.html`




### Resources

* [Maven Tomcat Plugin](http://tomcat.apache.org/maven-plugin.html)
* [Bootstrap](http://getbootstrap.com/)
* [Blocks](http://demo.bootstraptor.com/blocks.html)
