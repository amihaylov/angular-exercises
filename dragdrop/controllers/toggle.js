angular.module("dragDrop").controller("ToggleController", function ($scope) {
    
    $scope.showInfo = false;
    var previous;

    $scope.selectItem = function(item) {
    	$scope.models.selected = item;
    	if (!previous || previous !== item.label) {
    		$scope.showInfo = true;
    		previous = item.label;
    	} else {
        	$scope.showInfo = !$scope.showInfo;
        }
    };

});