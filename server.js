var express = require('express');

var exp = express();
var handlers = require('./handlers/nlpHandlers.js');
exp.use(express.static('client'));

exp.get('/sentence', function(req, res) {
  var sen = req.query.input;
  var textData = handlers.lang(sen);
  res.send(textData);
});

exp.get('/partsOfSpeech', function(req, res) {
  var partsData = handlers.getSpeechData(req.query.input)
    .map(val => {
      return [val.text, val.pos];
    });
  res.send(partsData);
});

exp.get('/partsCounter', function(req, res) {
  var parts = handlers.getSpeechData(req.query.input)
    .reduce((acc, partsObj) => {
      var obj = partsObj.pos;
      for(var posKey in obj) {
        if(acc[posKey]) {
          acc[posKey] += 1;
        } else {
          acc[posKey] = 1;
        }
      }
      return acc;
    }, {});
  res.send(parts);
});

exp.get('/counter', function(req, res) {
  var sen = req.query.input;
  var countData = handlers.count(sen)[0];
  res.send(countData);
});

exp.listen(1983);
