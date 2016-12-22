angular.module('verbiage')
  .factory('Paths', function($http) {
    var counter = function(input) {
      return $http.get('/counter/input')
        .then(function(data) {
          console.log('from factory ', data);
          return data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };
    var parts = function(input) {
      return $http.get('/partsOfSpeech/input')
        .then(function(data) {
          console.log('from factory ', data);
          return data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };
    var partsCounter = function(input) {
      return $http.get('/partsCounter/input')
        .then(function(data) {
          console.log('from factory ', data);
          return data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };
    return {
      counter: counter,
      parts: parts,
      partsCounter: partsCounter
    };
  });
