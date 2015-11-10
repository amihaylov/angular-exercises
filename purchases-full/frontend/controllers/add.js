angular.module('purchasesApp').controller('AddCtrl', function (Restangular, $stateParams, appService, $state) {

    // Cache controller scope.
    var self = this;

    // Initialize variable for new purchases.
    self.newPurchase = {};

    // Get current day's id.
    self.dayId = $stateParams.id;

    // Add new purchase to current day.
    self.addPurchase = function () {
        appService.savePurchase(self.dayId, self.newPurchase);
    };

});