//import express
var express = require('express')
var mongo = require('mongoose')
var bodyParser = require('body-parser');
var util = require("util")

//config express
var app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

require('./routes')(app)

//Connect to mongo 
mongo.connect('mongodb://localhost/josue', function(err,res){
    if(err) {
        console.log('Error to connect BD: ' + err)
    } else {
        console.log('Connect')
    }
})

app.post('/:id', function(req, res) {
    console.log('req.body ' + util.inspect(req.body))
    console.log('param ' + util.inspect(req.params)) //get params
    console.log('this is the iD ' + req.params.id)
    res.send('Hello.....!!!!!');
});



//port to listen server 
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});