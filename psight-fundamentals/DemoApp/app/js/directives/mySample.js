'use strict';

eventsApp.directive('mySample', function($compile) {
	return {
		/*
		link: function(scope, element, attrs, controller) {
			var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>";
			angular.element(element).html($compile(markup)(scope));
		}*/
		// For static html it is easier to use template prop
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>",
		// Creating isolate scope, so when in html we have more than
		// one instance of directive, they dont share scope
		scope: {}
	};
});
