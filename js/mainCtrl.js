angular.module('timeApp').controller('mainCtrl', function($scope, dirSvc) {
  $scope.getData = function() {
    $scope.myData = dirSvc.getData();
  };
});
