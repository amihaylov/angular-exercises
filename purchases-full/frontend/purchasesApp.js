angular.module('purchasesApp', ['ui.router', 'ui.bootstrap', 'restangular'])

    .constant("DAYS_OF_WEEK",{
        "DAYS":['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    })

    .config(function($stateProvider, $urlRouterProvider, DAYS_OF_WEEK) {
        
        // Set base URL for requests (API url).
        RestangularProvider.setBaseUrl('http://localhost:7171');

        // Configure Restangular to use _id instead if id
        RestangularProvider.setRestangularFields({
            id: "_id",
            name: "name"
        });
        
        $stateProvider
            
            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/{name}',
                templateUrl: 'views/purchase-content.html',
                controller: 'mainCtrl'
            }).state('home.add',{
                url: '/add/{name}',
                onEnter: function($modal, $state){
                    $modal.open({
                        templateUrl: 'views/add.html',
                        controller: 'addCtrl',
                        size: 'lg'
                    }).result.finally(function(){
                        $state.go('^');
                    });
                }
        }).state('home.edit',{
            url: '/edit',
            onEnter: function($modal, $state){
                $modal.open({
                    templateUrl: 'views/edit.html',
                    controller: 'editCtrl',
                    size: 'lg'
                }).result.finally(function(){
                    $state.go('^');
                });
            }  
        });

}); // closes $app.config()