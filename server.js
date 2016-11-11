var express = require('express');

var exp = express();

exp.use(express.static('client'));

exp.get('/sentence', function(req, res) {

  res.send('on 1983');
});

exp.listen(1983);
