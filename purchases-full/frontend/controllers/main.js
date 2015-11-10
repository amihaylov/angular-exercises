angular.module('purchasesApp').controller('MainCtrl', function ($stateParams, appService) {

    //Cache controller scope.
    var self = this;

    // Get current day's id.
    self.dayId = $stateParams.id;

    self.day = appService.getOne(self.dayId);

    // Delete purchase form current day.
    self.deletePurchase = function (index) {
        appService.deletePurchase(self.dayId, index);
    };

});