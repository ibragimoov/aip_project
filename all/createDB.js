var MongoClient = require("mongodb").MongoClient
MongoClient.connect("mongodb://localhost:27017/all",
    function(err,db){
        if(err) throw err
        var collection = db.collection('hero')
        collection.insertOne({name:"Рик"},function(err,result){
        db.close()
    })
})

