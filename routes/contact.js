var express = require('express');
var router = express.Router();
var mail = require('../emails/sendEmail');

/* GET users listing. */
router.post('/', function(req, res, next) {
  mail.sendEmail('Novo contato atraves do app CPGER', req.body);

  res.json({
    message: 'email enviado com sucesso'
  });
});

module.exports = router;
