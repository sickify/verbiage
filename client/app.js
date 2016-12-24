angular.module('verbiage', [])
  .controller('PartsCounterController', function($scope, Paths){
    $scope.pathsResults = [];
    $scope.input = "";
    $scope.parts = function() {
      Paths.parts($scope.input)
        .then(function (data) {
          $scope.pathsResults = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };

    $scope.partsCounter = function() {
      Paths.partsCounter($scope.input)
        .then(function (data) {
          $scope.pathsResults = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };

    $scope.counter = function() {
      Paths.counter($scope.input)
        .then(function (data) {
          $scope.pathsResults = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };
  });
