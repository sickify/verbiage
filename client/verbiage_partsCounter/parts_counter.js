angular.module('verbiage.partsCounter' [])
  .controller('PartsCounterController', function($scope, $http){
    $scope.parts = {};
    $http.get('/partsCounter')
      .then(function(data) {
        $scope.parts = data;
      }, function(err) {
        console.log(err);
      });

  });
