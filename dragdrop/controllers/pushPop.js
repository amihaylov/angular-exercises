angular.module("dragDrop").controller("PushPopController", function ($scope, PushPopService) {
    
    $scope.toFav = function(index) {
        PushPopService.pushPop($scope.models.lists.Favorites, $scope.models.lists.Others, index);
    };

    $scope.toOthers = function(index) {
        PushPopService.pushPop($scope.models.lists.Others, $scope.models.lists.Favorites, index, true);
    };

});