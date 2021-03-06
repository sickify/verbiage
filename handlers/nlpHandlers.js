var nlp = require('nlp_compromise');
var nlpNgram = require('nlp-ngram');
nlp.plugin(nlpNgram);

var lang = function(text) {
  return nlp.sentence(text);
};

var count = function(text) {
  var nlpText = nlp.text(text);
  return nlpText.ngram();
};

var getSpeechData = function(sentence) {
  return lang(sentence).terms;
};

module.exports.lang = lang;
module.exports.count = count;
module.exports.getSpeechData = getSpeechData;
