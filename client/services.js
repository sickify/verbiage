angular.module('verbiage.services', [])
  .factory('Paths', function($http) {
    var counter = function() {
      return $http.get('/counter')
        .then(function(data) {
          $scope.parts = data;
        }, function(err) {
          console.log(err);
        });
    };
    return {
      counter;
    };
  });
