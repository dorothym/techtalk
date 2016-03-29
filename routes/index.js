var express = require('express');
var router = express.Router();

var objToSend = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CORS test', para: 'Source application' });
});

router.get('/hello', function(req,res,next) {
	obj.objToSend.body = "hello"
	res.status(200).send(objToSend);
})

router.get('/private-data', function(req, res, next) {
  res.render('private-data');
});

router.get('/shared-data',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.render('shared-data')
});

router.get('/limited-data',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://customer-app-techtalk-0316.herokuapp.com/data");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.render('limited-data')
});


module.exports = router;
