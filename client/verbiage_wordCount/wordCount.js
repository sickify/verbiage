angular.module('verbiage.wordCount' [])
  .controller('WordCountController', function($scope, $http){
    $scope.parts = {};
    $http.get('/counter')
      .then(function(data) {
        $scope.parts = data;
      }, function(err) {
        console.log(err);
      });

  });
