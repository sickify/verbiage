var express = require('express');

var exp = express();
var handlers = require('./handlers');
exp.use(express.static('client'));

exp.get('/sentence', function(req, res) {
  var textData = handlers.lang('hello');
  res.send(textData);
});

exp.listen(1983);
