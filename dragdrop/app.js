angular.module("dragDrop",["ui.router","dndLists"])
    .config(function($stateProvider, $urlRouterProvider){
    	
        // localStorage does not support storing objects,
        // so we need to extend its prototype.     
        Storage.prototype.setObject = function(key, value) {
            this.setItem(key, JSON.stringify(value));
        };

        Storage.prototype.getObject = function(key) {
            var value = this.getItem(key);
            return value && JSON.parse(value);
        };

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