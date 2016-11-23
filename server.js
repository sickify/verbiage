var express = require('express');

var exp = express();
var handlers = require('./handlers');
exp.use(express.static('client'));

exp.get('/sentence', function(req, res) {
  var sen = req.query.input;
  var textData = handlers.lang(sen);
  res.send(textData);
});

exp.get('/partsOfSpeech', function(req, res) {
  var sen = req.query.input;
  var speechData = handlers.lang(sen).terms;
  var partsData = speechData.map(val => {
      return [val.text, val.pos];
    });
  res.send(partsData);
});

exp.get('/partsCounter', function(req, res) {
  var sen = req.query.input;
  var speechData = handlers.lang(sen).terms;
  res.send('{ Noun: 5, Verb: 6 }');
});

exp.get('/counter', function(req, res) {
  var sen = req.query.input;
  var countData = handlers.count(sen)[0];
  res.send(countData);
});

exp.listen(1983);
