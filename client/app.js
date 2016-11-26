var nlpGet = function() {
  var inputEl = document.getElementById('in');
  var sentence = inputEl.value;
  $.ajax({
    type: "GET",
    url: "/sentence",
    data: {input: sentence},
    success: function(data) {
      console.log(data);
      $('#main').html('<p>' + JSON.stringify(data) + '</p>');
    }
  });
};

var partsGet = function() {
  var inputEl = document.getElementById('in');
  var sentence = inputEl.value;
  $.ajax({
    type: "GET",
    url: "/partsOfSpeech",
    data: {input: sentence},
    success: function(data) {
      console.log(JSON.stringify(data));
      $('#main').html('<table id="countList"><tr><th>Part</th><th>Count</th></tr></table>');
      _.forEach(data, (val, key) => {
        console.log(val, 'key', key);
        $('#countList').append('<tr><td>' + key +'</td><td>' + val +'</td></tr>');
      });
    }
  });
};

var partsCounter = function() {
  var inputEl = document.getElementById('in');
  var sentence = inputEl.value;
  $.ajax({
    type: "GET",
    url: "/partsCounter",
    data: {input: sentence},
    success: function(data) {
      console.log(data);
      $('#main').html('<table id="countList"><tr><th>Word</th><th>Count</th></tr></table>');
      _.forEach(data, (val, key) => {
        $('#countList').append('<tr><td>' + key +'</td><td>' + val +'</td></tr>');
      });
    }
  });
};

var countGet = function() {
  var inputEl = document.getElementById('in');
  var sentence = inputEl.value;
  $.ajax({
    type: "GET",
    url: "/counter",
    data: {input: sentence},
    success: function(data) {
      $('#main').html('<table id="countList"><tr><th>Word</th><th>Count</th></tr></table>');
      _.forEach(data, (val) => {
        $('#countList').append('<tr><td>' + val.word +'</td><td>' + val.count +'</td></tr>');
      });
    }
  });
};
