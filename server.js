require("dotenv").config();
var firebase = require("firebase/app");

var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

var firebaseConfig = {
  apiKey: "AIzaSyAJEub_xpRNwSpgmhuCmsaGbm6Zjo_CAOw",
  authDomain: "potluck-chat.firebaseapp.com",
  databaseURL: "https://potluck-chat.firebaseio.com",
  projectId: "potluck-chat",
  storageBucket: "potluck-chat.appspot.com",
  messagingSenderId: "511761764742",
  appId: "1:511761764742:web:f3abc118fed1c7a9afdc07",
  measurementId: "G-P9NWJPXJD3"
};

firebase.initializeApp(firebaseConfig);

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
