var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var Hero = require("./models/hero").Hero
var async = require('async');

function open(callback){
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createHeroes(callback){
    async.parallel([
            function(callback){
                var pig = new Hero({nick:"pig"})
                pig.save(function(err,pig){
                    callback(err,"pig")
                })
            },
            function(callback){
                var vinni = new Hero({nick:"vinni"})
                vinni.save(function(err,vinni){
                    callback(err,"vinni")
                })
            },
            function(callback){
                var sova = new Hero({nick:"sova"})
                sova.save(function(err,sova){
                    callback(err,"sova")
                })
            }
        ],
        function(err,result){
            callback(err)
        })
}

function close(callback){
    mongoose.disconnect(callback)
}

async.series([
    open,
    dropDatabase,
    createHeroes,
    close
],
function(err,result){
    if(err) throw err
    console.log("ok")
})