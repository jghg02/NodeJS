//import mongo

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


//Creando el Schema en Mongo.
var serieItem = new Schema({
    itemId: String,
    name: String,
    country: String    
})

module.exports = mongoose.model('melis',serieItem)
