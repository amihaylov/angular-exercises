angular.module("dragDrop",["ui.router","dndLists"])
    .config(function($stateProvider, $urlRouterProvider){
    	$urlRouterProvider.otherwise('/');
    	$stateProvider
    	            
    	            // HOME STATES AND NESTED VIEWS ========================================
    	            .state('home', {
    	                url: '/',
    	                templateUrl: 'simple-frame.html',
    	                controller: 'InitController',
    	                controllerAs: 'InitController'
    	});
});