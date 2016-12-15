angular.module('verbiage.partsCounter' [])
  .controller('PartsCounterController', function($scope, $http){
    $scope.partsCounter = {};

    var getPaths = function() {
      Paths.partsCounter()
        .then(function (data) {
          $scope.partsCounter = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };
    getPaths();
  });
