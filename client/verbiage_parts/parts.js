angular.module('verbiage.parts' [])
  .controller('PartsController', function($scope, $http){
    $scope.parts = {};
    $http.get('/partsOfSpeech')
      .then(function(data) {
        $scope.parts = data;
      }, function(err) {
        console.log(err);
      });

  })
