//import express
var express = require('express')

//config express
var app = express()

app.get('/', function(req, res) {
    res.send('Hello.....!!!!!');
});

//port to listen server 
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});