angular.module('verbiage.services', [])
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

    return {
      counter,
      parts
    };
  });
