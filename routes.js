//Important to print [Object object]
var util = require("util")
var data = require('./index')


module.exports = function(app){
    //modelo
    var item = require('./mongo')

    //Get
    findAllItems = function(req,res) {
        item.find(function(error,allItems){
            if (!error) {
                console.log('here ' + allItems)
                if (allItems == null){
                    console.log('Is Empty')
                    res.send('Empty')
                } else {
                    res.send(allItems)
                }
            } else {
                console.log('Error: '+error)
            }
        })
    }

    //Get one Item 
    findItemById = function(req, res) {
        console.log('find....' + util.inspect(req.params))
        item.findById(req.params.itemId, function(error, currentItem){
            if (!error) {
                res.send(currentItem)
            } else {
                console.log('Error: '+error)
            }
        })
    }

    //Post
    addItem = function(req,res) {
        console.log('Saving Data....')
        var x = new item({
             itemId: req.body.itemId,
             name: req.body.name,
             country: req.body.country
         })
        
        x.save()
        res.send(x)
    }

    //Put
    updateItem = function(req,res){
        item.findById(req.param.itemId, function(error,item){
            item.itemId = req.body.itemId,
             item.name = req.body.name,
             item.country = req.body.country
        })

        item.save(function(error){
            if (!error) {
                console.log('Updated....')
            } else {
                console.log('Error: '+error)
            }

        })
    }

    //Routes
    app.get('/allitem',findAllItems)
    app.get('/item/:itemId',findItemById)
    app.post('/itemadd', addItem)
    app.put('/item/:itemId',updateItem)

}
