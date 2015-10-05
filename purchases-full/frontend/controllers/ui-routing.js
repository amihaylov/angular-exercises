var app = angular.module('purchasesApp', []);
	app.controller('mainCtrl', function($scope) {

		var days= ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
		$scope.currentDay = 0;
	    $scope.days=days;

	    $scope.db = [[{'purchase':'batteries','store':'Wallmart','description':'Duracell','price':10},{'purchase':'meat','store':'Billa','description':'awful','price':20}],
	    	[{'purchase':'batteries','store':'Wallmart','description':'Duracell','price':30},{'purchase':'meat','store':'Billa','description':'awful','price':40}],
	    	[{'purchase':'batteries','store':'Wallmart','description':'Duracell','price':50},{'purchase':'meat','store':'Billa','description':'awful','price':60}]];

	    $scope.purchaseObj={'purchase':'','store':'','description':'','price':0};

	    $scope.changeDay = function (day){
			$scope.currentDay = days.indexOf(day);
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