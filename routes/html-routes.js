
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

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  app.get("/display", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/display.html"));
  });

  
  app.get("/page3", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page3.html"));
  });

//ROUTES ADDED FOR THE DISCUSSION BOARD
// blog route loads blog.html - THE MAIN PAGE
app.get("/blog", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/blog.html"));
});

app.get("/blog2", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/blog2.html"));
});

// cms route loads cms.html
app.get("/cms", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/cms.html"));
});

// authors route loads author-manager.html
app.get("/authors", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/author-manager.html"));
});



};
