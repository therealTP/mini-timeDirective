angular.module('timeApp').service('dirSvc', function() {
  var myData = [1, 2, 3, 4, 5];
  this.getData = function() {
    return myData;
  };
});
