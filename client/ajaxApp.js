var partsGet = function() {
  var sentence = document.getElementById('in').value;
  $.ajax({
    type: "GET",
    url: "/partsOfSpeech",
    data: {input: sentence},
    success: function(data) {
      $('#main').html('<table id="countList"><tr><th>Word</th><th>Type</th></tr></table>');
      _.forEach(data, (val) => {
        _.forEach(val[1], (num, key) => {
          $('#countList').append('<tr><td>' + val[0] +'</td><td>' + key +'</td></tr>');
          $('#main').prepend('<h3>Parts of Speech</h3>')
        });
      });
    }
  });
};

var partsCounter = function() {
  var sentence = document.getElementById('in').value;
  $.ajax({
    type: "GET",
    url: "/partsCounter",
    data: {input: sentence},
    success: function(data) {
      $('#main').html('<table id="countList"><tr><th>Word</th><th>Count</th></tr></table>');
      _.forEach(data, (val, key) => {
        $('#countList').append('<tr><td>' + key +'</td><td>' + val +'</td></tr>');
        $('#main').prepend('<h3>Parts</h3>');
      });
    }
  });
};

var countGet = function() {
  var sentence = document.getElementById('in').value;
  $.ajax({
    type: "GET",
    url: "/counter",
    data: {input: sentence},
    success: function(data) {
      $('#main').html('<table id="countList"><tr><th>Word</th><th>Count</th></tr></table>');
      _.forEach(data, (val) => {
        $('#countList').append('<tr><td>' + val.word +'</td><td>' + val.count +'</td></tr>');
        $('#main').prepend('<h3>Word Counter</h3>')
      });
    }
  });
};
