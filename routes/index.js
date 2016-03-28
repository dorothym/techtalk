var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CORS test', para: 'Source application' });
});

router.get('/data', function(req, res, next) {
  res.render('data');
});

router.get('/shared-data',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.render('shared-data')
});



module.exports = router;
