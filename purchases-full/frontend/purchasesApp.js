angular.module('purchasesApp', ['ui.router', 'ui.bootstrap', 'restangular'])

    .constant("DAYS_OF_WEEK",{
        "DAYS":['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    })

    .config(function($stateProvider, $urlRouterProvider, DAYS_OF_WEEK, RestangularProvider) {
        
        // Set base URL for requests (API url).
        RestangularProvider.setBaseUrl('http://localhost:7171');

        // Configure Restangular to use _id instead if id
        RestangularProvider.setRestangularFields({
            id: "_id"
        });
        
        $stateProvider
            
            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/{id}',
                templateUrl: 'views/purchase-content.html',
                controller: 'MainCtrl',
                controllerAs: 'MainCtrl'
            }).state('home.add',{
                url: '/add/{id}',
                onEnter: function($modal, $state){
                    $modal.open({
                        templateUrl: 'views/add.html',
                        controller: 'AddCtrl',
                        controllerAs: 'AddCtrl',
                        size: 'lg'
                    }).result.finally(function(){
                        $state.go('^');
                    });
                }
            //Will edit the current entry and POST the whole day
        }).state('home.edit',{
            url: '/edit/{index}',
            onEnter: function($modal, $state){
                $modal.open({
                    templateUrl: 'views/edit.html',
                    controller: 'EditCtrl',
                    controllerAs: 'EditCtrl',
                    size: 'lg'
                }).result.finally(function(){
                    $state.go('^');
                });
            }  
        });

}); // closes $app.config()