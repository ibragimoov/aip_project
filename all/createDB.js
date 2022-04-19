// var MongoClient = require("mongodb").MongoClient
// var data = require("./data.js").data
// MongoClient.connect("mongodb://localhost:27017/rick-and-morty",
//     function(err,db){
//     if(err) throw err
//     db.dropDatabase()
//     var collection = db.collection("hero")
//     collection.insertMany(data,function(err,result){
//         db.close()
//     })
// })

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var Cat = mongoose.model('Cat', { name: String })
var kitty = new Cat({ name: 'Пушок' })
kitty.save(function (err) {
    if (err) {
    console.log(err)
    } else {
    console.log('Мяу')
    }
})