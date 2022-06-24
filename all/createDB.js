var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/all')
var Hero = require("./models/hero").Hero
var async = require('async');

mongoose.connection.on("open",function(){
    var db = mongoose.connection.db
    db.dropDatabase(function(err) {
        if(err) throw err
        async.parallel(
            [
                function(callback) {
                    var pig = new Hero({nick:"pig"})
                    pig.save(function(err,pig){
                    callback(err,"pig")
                    })
                },
                function(callback) {
                    var vinni = new Hero({nick:"vinni"})
                    vinni.save(function(err,vinni){
                    callback(err,"vinni")
                    })
                },
                    function(callback) {
                    var sova = new Hero({nick:"sova"})
                    sova.save(function(err,sova){
                    callback(err,"sova")
                    })
                }
            ],
            function(err,result) {
                if(err) {
                    console.log(err)
                } 
                else {
                    console.log("Успешно созданы герои с никами: "
                    +result.join(", "))
                }
                mongoose.disconnect()
        })
    })
    })