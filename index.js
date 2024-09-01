// Requiring all the packages

var express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    dotenv = require("dotenv"),
    bodyParser = require("body-parser");


// Enable the app to use different packages
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


// Load env vars
dotenv.config({ path: "./config/config.env" });

// using session
app.use(function(req, res, next){
    next();
})


// Set the app view engine
app.use(express.static('public'));
app.set("view engine", "ejs");

// Requiring all the routes
var indexRoutes       = require("./routes/index");

// Enable the app to use the routes
app.use("/", indexRoutes);

const PORT = process.env.PORT || 5556;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));