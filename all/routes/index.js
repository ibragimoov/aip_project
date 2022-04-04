var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rick', function(req, res, next) {
    res.render('hero', { 
        title: "Рик",
        picture: "images/rick.png",
        desc: "один из двух главных героев американского мультсериала «Рик и Морти», созданного Джастином Ройландом и Дэном Хармоном. Рик — гениальный учёный, алкоголик, реалист, атеист и мизантроп; для него характерны цинизм и пренебрежение общепринятыми нормами поведения"
    });
});

router.get('/morty', function(req, res, next) {
    res.render('hero', { 
        title: "Морти",
        picture: "images/morty.png",
        desc: "один из главных героев американского комедийного мультсериала «Рик и Морти», внук Рика Санчеса, неуверенный в себе и параноидальный 14-летний подросток, ученик средней школы, образ которого основан на образе Марти Макфлая из научно-фантастической трилогии «Назад в будущее»."
    });
});

router.get('/summer', function(req, res, next) {
    res.render('hero', { 
            title: "Саммер",
            picture: "images/summer.png",
            desc: "один из главных героев американского мультсериала «Рик и Морти». Созданная Джастином Ройландом и Дэном Хармоном, Саммер - обычная и часто поверхностная 17-летняя девочка-подросток, которая одержима улучшением своего социального статуса среди сверстников."
    });
});

router.get('/bet', function(req, res, next) {
    res.render('hero', {
        title: "Бет",
        picture: "images/bet.png",
        desc: "дочь Рика, жена Джерри, мать Морти и Саммер. Она работает лошадиным хирургом в Больнице Святого Экуиса."
    });
});

router.get('/jerry', function(req, res, next) {
    res.render('hero', {
        title: "Джерри",
        picture: "images/jerry.png",
        desc: "отец Саммер и Морти. Часто конфликтует с женой и её отцом. Комплексует из-за своего низкого интеллекта."
    });
});

router.get('/messeks', function(req, res, next) {
    res.render('hero', {
        title: "Мистер Миссикс",
        picture: "images/messeks.png",
        desc: "милые инопланетные существа, желающие исполнить любое поручение человека, но не всегда на это способные."
    });
});

module.exports = router;
