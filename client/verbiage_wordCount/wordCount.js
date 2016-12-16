angular.module('verbiage.wordCount', [])
  .controller('WordCountController', function($scope, Paths){
    $scope.wordCount = {};

    var getPaths = function() {
      Paths.counter()
        .then(function (data) {
          $scope.wordCount = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };

    getPaths();
  });
