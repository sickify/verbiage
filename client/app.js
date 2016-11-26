var nlpGet = function() {
  var inputEl = document.getElementById('in');
  var sentence = inputEl.value;
  $.ajax({
    type: "GET",
    url: "/sentence",
    data: {input: sentence},
    success: function(data) {
      console.log(data);
      $('#main').append('<p>' + JSON.stringify(data) + '</p>');
    }
  })
}

var partsGet = function() {
  var inputEl = document.getElementById('in');
  var sentence = inputEl.value;
  $.ajax({
    type: "GET",
    url: "/partsOfSpeech",
    data: {input: sentence},
    success: function(data) {
      console.log(data);
      $('#main').append('<p>' + JSON.stringify(data) + '</p>');
    }
  })
}

var partsCounter = function() {
  var inputEl = document.getElementById('in');
  var sentence = inputEl.value;
  $.ajax({
    type: "GET",
    url: "/partsCounter",
    data: {input: sentence},
    success: function(data) {
      console.log(data);
      $('#main').append('<p>' + JSON.stringify(data) + '</p>');
    }
  })
}

var countGet = function() {
  var inputEl = document.getElementById('in');
  var sentence = inputEl.value;
  $.ajax({
    type: "GET",
    url: "/counter",
    data: {input: sentence},
    success: function(data) {
      console.log(data);
      $('#main').append('<p>' + JSON.stringify(data) + '</p>');
    }
  })
}
