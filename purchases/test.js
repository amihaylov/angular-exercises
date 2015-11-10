angular.module('demo', []);

angular.module('demo').controller('demoController', function($scope) {
  $scope.obj=[{'name':'Anton'}, {'name':'Pesho'},{'name':'Kiro'}];
  $scope.showMyText = false;
});
