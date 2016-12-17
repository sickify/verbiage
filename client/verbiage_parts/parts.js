angular.module('verbiage.parts', [])
  .controller('PartsController', function($scope, Paths){
    $scope.parts = {};

    var initPaths = function() {
      Paths.parts()
        .then(function (data) {
          $scope.parts = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };

    initPaths();
  });
