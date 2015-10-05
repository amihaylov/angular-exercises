var app = angular.module('purchasesApp', ['ui.router']);

app.constant("DAYS_OF_WEEK",{
    "DAYS":['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
});

app.config(function($stateProvider, $urlRouterProvider, DAYS_OF_WEEK) {
    
    $urlRouterProvider.otherwise('/Monday');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/{day}',
            templateUrl: 'views/purchase-content.html',
            controller: 'mainCtrl'
        });

}); // closes $app.config()

app.controller('mainCtrl', function($scope, $state,$stateParams, DAYS_OF_WEEK) {
	
    $scope.days=DAYS_OF_WEEK.DAYS;
    $scope.curDayStr = $stateParams.day;
    $scope.currentDay = $scope.days.indexOf($scope.curDayStr);

    $scope.db = [[{'purchase':'batteries','store':'Wallmart','description':'Duracell','price':10},{'purchase':'meat','store':'Billa','description':'awful','price':20}],
    	[{'purchase':'batteries','store':'Wallmart','description':'Duracell','price':30},{'purchase':'meat','store':'Billa','description':'awful','price':40}],
    	[{'purchase':'batteries','store':'Wallmart','description':'Duracell','price':50},{'purchase':'meat','store':'Billa','description':'awful','price':60}]];

    $scope.purchaseObj={'purchase':'','store':'','description':'','price':0};

    $scope.changeDay = function (day){
		$scope.currentDay = $scope.days.indexOf(day);
        console.log($scope.currentDay);
	}

	$scope.addPurchase = function (){
		$scope.db[$scope.currentDay].push($scope.purchaseObj);
	}

	$scope.editPurchase = function (index){
		$scope.db[$scope.currentDay][index] = $scope.purchaseObj;
	}

	$scope.deletePurchase = function (index){
		$scope.db[$scope.currentDay].splice(index,1);
	}
});