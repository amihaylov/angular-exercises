var myApp = angular.module('scopeInheritance', []);
	myApp.controller('MainController', ['$scope', function($scope) {
	  $scope.timeOfDay = 'morning';
	  $scope.name = 'Nikki';
	}]);
	myApp.controller('ChildController', ['$scope', function($scope) {
	  $scope.name = 'Mattie';
	}]);
	myApp.controller('GrandChildController', ['$scope', function($scope) {
	  $scope.timeOfDay = 'evening';
	  $scope.$parent.$parent.name = 'Gingerbread Baby';
}]);

