var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
// var PORT = process.env.PORT || 8080;
var PORT = process.env.PORT || "mysql://gl8780jrj3zsem7t:v44nmeia6qav0oyv@gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hti5u0nzqa7i2vwl";

// Requiring our models for syncing
var db = require("./models");
const cors = require('cors');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

app.use(cors({origin:true}));