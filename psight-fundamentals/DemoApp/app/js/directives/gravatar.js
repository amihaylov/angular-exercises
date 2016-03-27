'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder) {
	return {
		restrict: 'E',
		template: '<img />',
		// Replace the element where the directive was declared
		// with directive's content
		replace: true,
		//Instead of scope: {email: '='} we will use attrs
		link: function(scope, element, attrs, controller) {
			attrs.$observe('email', function(newVal, oldVal) {
				if (newVal !== oldVal) {
					attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newVal));
				}
			});
		}
	}
});
