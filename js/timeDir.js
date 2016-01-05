angular.module('timeApp').directive('showTime', function() {
  return {
    templateUrl: 'js/timeTmpl.html',
    restrict: 'E',
    scope: {
    },
    link: function($scope, elem, attrs) {
      $scope.time = new Date();
    },
    controller: 'mainCtrl'
  };
});
