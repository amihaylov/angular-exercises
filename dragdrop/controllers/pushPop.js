angular.module("dragDrop").controller("PushPopController", function ($scope, PushPopService) {
    
    $scope.toFav = function(index) {
        PushPopService.pushPop($scope.models.lists.Favorites, $scope.models.lists.Others, index);
        localStorage.setObject('models', $scope.models);
    };

    $scope.toOthers = function(index) {
        PushPopService.pushPop($scope.models.lists.Others, $scope.models.lists.Favorites, index, true);
        localStorage.setObject('models', $scope.models);
    };

});