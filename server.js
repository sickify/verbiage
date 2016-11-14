var express = require('express');

var exp = express();
var handlers = require('./handlers');
exp.use(express.static('client'));

exp.get('/sentence', function(req, res) {
  var sen = req.query.input;
  var textData = handlers.lang(sen);
  res.send(textData);
});

exp.get('/counter', function(req, res) {
  var sen = req.query.input;
  var countData = handlers.count(sen);
  res.send(countData);
});

exp.listen(1983);
