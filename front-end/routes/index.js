var express = require('express');
var router = express.Router();

var contractInstance = require('../utils/setup')

/* GET home page. */
router.get('/', function(req, res, next) {
      var totalSupply = Number(contractInstance.totalSupply())
      var maxPerSale = Number(contractInstance.checkMaxPerSale())
      var maxTokenTypes = Number(contractInstance.checkMaxTokenTypes())
      var title = 'TicketsToken'
      res.render('index', {title, totalSupply, maxPerSale, maxTokenTypes})
});

module.exports = router;