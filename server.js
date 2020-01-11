// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Tells node that we are creating an "express" server
var app = express();

// create application/json parser
var jsonParser = bodyParser.json();

//  create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//  parse various different custon JSON types as JSON
app.use(bodyParser.json({ type: 'application/**json' }));

//  parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

//  parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }));

// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  