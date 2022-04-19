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
var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " сказал мяу")
}

var Cat = mongoose.model('Cat', schema)
var kitty = new Cat({ name: 'Пушок' })
kitty.save(function (err) {
kitty.meow()
})
