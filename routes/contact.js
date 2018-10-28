var express = require('express');
var router = express.Router();
var mail = require('../emails/sendEmail');

function formatDataContact (contact) {
  contact.dados.vazao = Number(contact.dados.vazao).toFixed(2);
  contact.dados.pressao = Number(contact.dados.pressao).toFixed(2);
  contact.dados.potencia = Number(contact.dados.potencia).toFixed(2);
  contact.dados.valorDia = Number(contact.dados.valorDia).toFixed(2);
  contact.dados.valorMes = Number(contact.dados.valorMes).toFixed(2);
  contact.dados.valorAno = Number(contact.dados.valorAno).toFixed(2);

  contact.settings.tarifa = Number(contact.settings.tarifa).toFixed(2);
  contact.settings.rendimentoGerador = Number(contact.settings.rendimentoGerador).toFixed(2);
  contact.settings.pesoAgua = Number(contact.settings.pesoAgua).toFixed(2);
  contact.settings.aceleracaoGravidade = Number(contact.settings.aceleracaoGravidade).toFixed(2);
  contact.settings.horasPorDia = Number(contact.settings.horasPorDia).toFixed(2);

  return contact;
}

/* GET users listing. */
router.post('/', function (req, res, next) {
  mail.sendEmail('Novo contato atraves do app CPGER', formatDataContact(req.body));

  res.json({
    message: 'email enviado com sucesso'
  });
});

module.exports = router;
