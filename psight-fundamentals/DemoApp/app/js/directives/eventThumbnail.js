'use strict';

eventsApp.directive('eventThumbnail', function() {
	return {
		restrict: 'E',
		// Use valid html, instead of appending stuff
		replace: true,
		templateUrl: '/templates/directives/eventThumbnail.html',
		scope: {
			// Check EventList.html dashes translate to camel case
			// in html attribute can be my-attr in js is myAttr
			event: '=',
		},
	};
});
