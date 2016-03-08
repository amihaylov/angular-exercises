'use strict';

eventsApp.controller('EventController',
	function EventController($scope, $log, eventData, $routeParams, $route) {

		$scope.snippet = '<span style="color:red">Hi there</span>';
		$scope.boolValue = true;
		$scope.myStyle = {color:'red'};
		$scope.myclass = 'blue';
		$scope.buttonDisabled = true;

		// Testing $route, which is typically not used, try setting query params like event/1?foo=bar in url
		// you can also get eventId, $route.current.pathParams will get only path not query params
		console.log($route.current.params.foo);
		// Using $resource
		$scope.event = eventData.getEvent($routeParams.eventId);
		// There is still a promise with .$promise.then(resolve,reject)
		// so you can do things after resolving/rejecting.
		// Also you can .then(resolve).catch(reject)

		// Using $http
		// eventData.getEvent()
		// 		.success(function(event) {
		// 			$scope.event = event;
		// 		})
		// 		.error(function(data, status, headers, config) {
		// 			$log.warn(data, status, headers, config);
		// 		});
		// If you dont want to use AJAX calls:
		// $scope.event = eventData.event;

		//Used by orderBy filter, - is for sorting in the opposite way
		$scope.sortOrder = '-upVoteCount';

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};
	});
