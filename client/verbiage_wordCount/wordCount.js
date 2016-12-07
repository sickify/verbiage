angular.module('verbiage.wordCount' [])
  .controller('WordCountController', function($scope, Paths){
    $scope.parts = {};

    var initPaths = function() {
      Paths.counter()
        .then(function (data) {
          $scope.parts = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };

    initPaths();
  });
