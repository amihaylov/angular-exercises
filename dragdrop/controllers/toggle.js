angular.module("dragDrop").controller("ToggleController", function ($scope) {
    
    $scope.showInfo = false;

    $scope.showText = function() {
        $scope.showInfo = !$scope.showInfo;
    };

});