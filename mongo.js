//import mongo
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var serieItem = new Schema({
    itemId: String,
    name: String,
    country: String    
})

module.exports = mongoose.model('melis',serieItem)