'use strict';
eventsApp.filter('durations', function() {
	return function(duration) {
		switch (duration) {
			default:
			case 1:
				return 'Half hour';
			case 2:
				return '1 Hour';
			case 3:
				return 'Half day';
			case 4:
				return 'One day';
		}
	}
});