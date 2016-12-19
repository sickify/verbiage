angular.module('verbiage')
  .factory('Paths', function($http) {
    var counter = function() {
      return $http.get('/counter')
        .then(function(data) {
          return data;
        });
    };
    var parts = function() {
      return $http.get('/partsOfSpeech')
        .then(function(data) {
          return data;
        });
    };
    var partsCounter = function() {
      return $http.get('/partsCounter')
        .then(function(data) {
          return data;
        });
    };
    return {
      counter: counter,
      parts: parts,
      partsCounter: partsCounter
    };
  });
