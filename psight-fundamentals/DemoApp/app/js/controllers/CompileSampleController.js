'use strict';
// Dont do this cause the compiled string can execute JS !
eventsApp.controller('CompileSampleController',
	function CompileSampleController($scope, $compile, $parse) {

		// $parse turns any angular expression into function
		// This equals to function(){return 1+2;}
		var fn = $parse('1 + 2');
		console.log(fn());

		var getter = $parse('event.name');

		var context1 = {event: {name: 'AngularJS Camp'}};
		var context2 = {event: {name: 'Code Camp'}};

		console.log(getter(context1));
		console.log(getter(context2));

		// There are also setters via assign

		var setter = getter.assign;
		setter(context2, 'Code Retreat');

		console.log(context2.event.name);
		
		$scope.appendDivToElement = function(markup) {
			return $compile(markup)($scope).appendTo(angular.element('#appendHere'));
		}
	});
