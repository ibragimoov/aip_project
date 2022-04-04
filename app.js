import express from "express"
import bodyParser from 'body-parser'

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    var form = '<!doctype html>'+
    '<html lang="ru">'+
    '<head>'+
    '<meta charset="UTF-8">'+
    '<title>Форма</title>'+
    '</head>'+
    '<body>'+
    '<h1>Форма для отправки данных на сервер</h1>'+
    '<form action="/submit_result" method="post">'+
    '<textarea name="text" id="" cols="30" rows="10"></textarea><br/>'+
    '<input type="submit" value="Отправить данные на сервер"/>'+
    '</form>'+
    '</body>'+
    '</html>'
    res.send(form)
})

app.post("/submit_result", (req, res) => {
    console.log(req.body)
    var post_text = req.body.text ? "Вы отправили на сервер текст:"
        + req.body.text : "Вы отправили на сервер пустую строку"
    res.send(post_text)
})
    

app.listen("3000", () => {
    console.log('Сервер работает и слушает порт 3000')
})