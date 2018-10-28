var express = require('express');
var router = express.Router();
var mail = require('../emails/sendEmail');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log('passou por dasdasdasd');

  mail.sendEmail('Novo contato atraves do app CPGER', req.body);

  res.sendStatus(200);
});

module.exports = router;
