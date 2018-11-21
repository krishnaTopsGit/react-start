var express = require('express');
const bodyParser = require('body-parser');
var app = express();

let port = 5000;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var ObjectId = require('mongodb').ObjectId; 

app.use(bodyParser.json());

let dbConnection;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbConnection = db.db("reactCRUD");
  console.log("Database created!");
  // db.close();
})

app.get('/', (req,res) => {
    dbConnection.collection("users").find({}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)
    });
})

app.post('/add', (req,res) => {
    console.log('req.body',req.body);
    dbConnection.collection("users").insertOne(req.body, function(err, resp) {
        if (err) throw err;
        res.send(resp)
    });
})

app.post('/edit', (req,res) => {
    // console.log('req.body',req.body);
    let mongoId = req.body._id;
    delete req.body._id;
    // console.log('req.body',req.body);
    // console.log('mongoId',mongoId)

    dbConnection.collection("users").findOneAndUpdate({'_id': ObjectId(mongoId)},{ $set: req.body}, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})


app.listen(port, () => {
    console.log('Server is running on port ' + port);
});