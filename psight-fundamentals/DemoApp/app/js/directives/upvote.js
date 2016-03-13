'use strict';

eventsApp.directive('upvote', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			// & is going to pass values from isolate into parent scope
			// Check http://stackoverflow.com/questions/14908133/what-is-the-difference-between-vs-and-in-angularjs
			upvote: '&',
			downvote: '&',
			count: '=',
		},
	};
});
