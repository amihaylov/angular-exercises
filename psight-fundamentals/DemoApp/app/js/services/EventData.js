eventsApp.factory('eventData', function($http, $log, $resource) {
	var resource = $resource('/data/event/:id', {id: '@id'});
	return {
			getEvent: function(eventId) {
				return resource.get({id: eventId});
				// If you want to use $http
				// return $http({method: 'GET', url: '/data/event/1'});
			},
			save: function(event) {
				event.id = 999;
				return resource.save(event);
			},
			// If we want to use static object
			// event:  {
			// 	name: 'Angular Boot Camp',
			// 	date: 1457192621476,
			// 	time: '10:30 am',
			// 	location: {
			// 		address: 'Google HQs',
			// 		city: 'Mountain View',
			// 		state: 'CA',
			// 	},
			// 	imageUrl: '/img/angularjs-logo.png',
			// 	sessions: [
			// 		{
			// 			name: 'Directives Masteclass',
			// 			creatorName: 'Bob Smith',
			// 			duration: 1,
			// 			upVoteCount: 0,
			// 		},
			// 		{
			// 			name: 'Scopes for fun',
			// 			creatorName: 'John Smith',
			// 			duration: 2,
			// 			upVoteCount: 0,
			// 		},
			// 		{
			// 			name: 'Well behaved controllers',
			// 			creatorName: 'Jack Smith',
			// 			duration: 4,
			// 			upVoteCount: 0,
			// 		},
			// 	],
			// },
			getAllEvents: function() {
 				return resource.query();
			},
	};
});
