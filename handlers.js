var nlp = require('nlp_compromise');

const lang = function(text) {
  return nlp.sentence(text);
};


module.exports.lang = lang;
