angular.module('verbiage', [])
  .controller('PartsCounterController', function($scope, Paths){
    $scope.pathsResults = {};
    $scope.parts = function() {
      Paths.parts()
        .then(function (data) {
          $scope.pathResults = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };

    $scope.partsCounter = function() {
      Paths.partsCounter()
        .then(function (data) {
          $scope.pathResults = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };

    $scope.counter = function() {
      Paths.counter()
        .then(function (data) {
          $scope.pathResults = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };
  });
