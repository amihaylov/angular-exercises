angular.module('purchasesApp').controller('EditCtrl', function (appService, $stateParams) {

    // Cache controller scope.
    var self = this;

    self.dayId = $stateParams.id;

    // Lame work-around.... TODO: FIX THIS SHIT!
    self.purchaseIndex = $stateParams.index;

    appService.getPurchase(self.dayId, self.purchaseIndex).then(function (res) {
        self.currentPurchase = res;
    });

    self.editPurchase = function () {
        appService.editPurchase(self.dayId, self.purchaseIndex, self.currentPurchase);
    };

    // Delete purchase form current day.
    self.deletePurchase = function () {
        appService.deletePurchase(self.dayId, self.purchaseIndex);
    };

});

