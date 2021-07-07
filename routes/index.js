var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/upload', (req, res, next) => {
  res.render('upload');
});

router.get('/test', (req, res, next) => {
  console.log('테스트 완료');
  res.json({
    message: 'res 완료',
  });
});

router.post('/test2', (req, res, next) => {
  const test = req.body.test;
  console.log(test);
  res.json({
    message: 'post 완료',
  });
});

module.exports = router;
