'use strict';

eventsApp.directive('greeting', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
		controller: function($scope) {
			$scope.sayHello = function() {
				alert('Hello');
			}
		}
		// Or if the controller is specified elsewhere:
		// controller: '@', name: 'propName'
		// in HTML <greeting crl="someCtrl" />
	}
});
