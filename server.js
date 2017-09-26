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
