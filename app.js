import express from "express"
var app = express()

app.get("/", (req,res) => {
    res.send("Серверная информация для браузера")
})

app.listen("3000")