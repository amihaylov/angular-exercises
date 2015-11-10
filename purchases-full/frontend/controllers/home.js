angular.module('purchasesApp').controller('HomeCtrl', function ($scope, appService) {

    //Cache controller scope.
    var self = this;

    // Get all days from db.
    $scope.days = appService.getAll();

    // Active day.
    self.active = 0;

    // Set active day.
    self.setActive = function(index){
        self.active = index;
    };

});