
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads page1.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page1.html"));
  });

  app.get("/page1", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page1.html"));
  });

  app.get("/page2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page2.html"));
  });

  
  app.get("/page3", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page3.html"));
  });

};
