var express = require("express");   
var mongo = require('mongodb');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sugatadb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sugatadb");
  var myobj = [
    { _id: 1, name: 'sugata', department: 'clerical staff', designation: 'Developer', salary: 3500, dateOfJoining: '2 Jan 2018', city: 'Delhi'},
    { _id: 2, name: 'Rahul', department: 'development staff', designation: 'Designer', salary: 4500, dateOfJoining: '3 Jan 2018', city: 'Bangalore'},
    { _id: 3, name: 'Suparna', department: 'support staff', designation: 'Programmer', salary: 5500, dateOfJoining: '4 Jan 2018', city: 'New York'},
    { _id: 4, name: 'Vikey', department: 'development staff', designation: 'Developer', salary: 6500, dateOfJoining: '5 Jan 2018', city: 'California'},
    { _id: 5, name: 'Sudip', department: 'clerical staff', designation: 'Designer', salary: 7500, dateOfJoining: '6 Jan 2018', city: 'Bangalore'},
    { _id: 6, name: 'Arijit', department: 'ops staff', designation: 'Programmer', salary: 8500, dateOfJoining: '7 Jan 2018', city: 'New York'},
    { _id: 7, name: 'Saikat', department: 'support staff', designation: 'Developer', salary: 9500, dateOfJoining: '8 Jan 2018', city: 'Delhi'},
    { _id: 8, name: 'Priya', department: 'clerical staff', designation: 'Designer', salary: 10500, dateOfJoining: '9 Jan 2018', city: 'California'},
    { _id: 9, name: 'Neha', department: 'ops staff', designation: 'Programmer', salary: 12500, dateOfJoining: '10 Jan 2018', city: 'Singapore'},
    { _id: 10, name: 'Avi', department: 'support staff', designation: 'Developer', salary: 13500, dateOfJoining: '12 Jan 2018', city: 'Bangalore'},
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) console.log("no records found"); 
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
  dbo.collection("customers").find({}, { designation: 'Developer' }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
    dbo.collection("customers").find({}, { salary: { $gt: 7000 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  dbo.collection("customers").find({}, { dateOfJoining: '12 Jan 2018' }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  var mysort = { salary: 1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  dbo.collection("customers").find({}, { salary: {$gt: 5000, $lt: 40000} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  bo.collection("customers").find({}, { designation: { $not: 'Developer'} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  var mysort = { city: -1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  dbo.collection("customers").find({}, { city: 'Singapore', salary: { $gt: 8000 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
app.listen(9000,function(){
    console.log("Server started listining");
}); 