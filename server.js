var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";
// Create a database variable outside of the database
// connection callback to reuse the connection
// pool in your app
var db;

var app = express();

app.use(bodyParser.json());

// Connect to the database before starting
// the application server
mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // save databse object from the callback for reuse
  db = database;
  console.log("Database connection redy");

  // initialize the app
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/contacts"
    GET: finds all contacts
    POST: creates a new contact
*/
app.get("/api/contacts", function(req, res) {

});

app.post("/api/contacts", function(req, res){

});

/*  "/api/contacts/:id"
    GET: find contact by id
    PUT: update contact by id
    DELETE: deletes contact by id
*/
app.get("/api/contacts/:id", function(req, res){

});

app.put("/api/contacts/:id", function(req, res){

});

app.delete("/api/contacts/:id", function(req, res){

});
