var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rick', function(req, res, next) {
  res.render('index', { title: 'Рик' });
});

router.get('/morty', function(req, res, next) {
  res.render('index', { title: 'Морти' });
});

router.get('/summer', function(req, res, next) {
  res.render('index', { title: 'Саммер' });
});

router.get('/bet', function(req, res, next) {
  res.render('index', { title: 'Бет' });
});

router.get('/jerry', function(req, res, next) {
  res.render('index', { title: 'Джерри' });
});

router.get('/messeks', function(req, res, next) {
  res.render('index', { title: 'Мистер Миссикс' });
});

module.exports = router;
