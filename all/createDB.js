var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var async = require("async")
var data = require('./data.js').data

async.series([
        open,
        dropDatabase,
        requireModels,
        createHeroes
    ],
    function(err,result){
        mongoose.disconnect()
    })

function open(callback){
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createHeroes(callback){
    async.each(data, function(heroData, callback){
            var hero = new mongoose.models.Hero(heroData)
            hero.save(callback)
        },
        callback)
}

function requireModels(callback){
    require("./models/hero").Hero

    async.each(Object.keys(mongoose.models),function(modelName){
        mongoose.models[modelName].ensureIndexes(callback)
    },
        callback
    )
}
