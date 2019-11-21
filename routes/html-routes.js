
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads homepage.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/displaypage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/displaypage.html"));
  });

  
  app.get("/page3", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page3.html"));
  });

};
