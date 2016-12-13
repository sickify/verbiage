angular.module('verbiage.wordCount' [])
  .controller('WordCountController', function($scope, Paths){
    $scope.wordCount = {};

    var initPaths = function() {
      Paths.counter()
        .then(function (data) {
          $scope.wordCount = data;
        })
        .catch(function(err) {
          console.log(err);
        });
    };
    
    initPaths();
  });
