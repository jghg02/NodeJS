//import express
var express = require('express')
var mongo = require('mongoose')
var bodyParser = require('body-parser');

//Connect to mongo 
mongo.connect('mongodb://localhost/josue', function(err,res){
    if(err) {
        console.log('Error to connect BD: ' + err)
    } else {
        console.log('Connect')
    }
})

//config express
var app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
    res.send('Hello.....!!!!!');
});

require('./routes')(app)

//port to listen server 
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});