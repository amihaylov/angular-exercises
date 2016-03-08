'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
						.config(function($routeProvider, $locationProvider) {
							$routeProvider.when('/newEvent',
								{
									templateUrl: 'templates/NewEvent.html',
									controller: 'EditEventController',
								});
							$routeProvider.when('/events',
								{
									templateUrl: 'templates/EventList.html',
									controller: 'EventListController',
								});
							$routeProvider.when('/event/:eventId',
								{
									templateUrl: 'templates/EventDetails.html',
									controller: 'EventController',
								});
							$routeProvider.otherwise({redirectTo: '/events'});
							// No more # in url
							$locationProvider.html5Mode(true);
						})
						.factory('myCache', function($cacheFactory) {
							return $cacheFactory('myCache', {capacity: 3});
						});
