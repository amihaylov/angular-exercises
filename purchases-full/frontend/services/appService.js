angular.module('purchasesApp').factory('appService', function (Restangular, $state) {
	return{
        getAll: function () {
            return Restangular.all('days').getList().$object;
        },
        getOne: function (dayId) {

            return Restangular.one('days', dayId).get().$object;
        },
        savePurchase: function (dayId, purchase) {
            Restangular.one('days', dayId).get().then(function (res) {

                // Fetch current day.
                var day = res;

                // add newPurchase to current day's purchases.
                day.purchases.push(purchase);

                // PUT current day with the added purchase.
                day.put().then(function () {
                    $state.go('home', null, {reload: true});
                });
            });
        },
        deletePurchase: function (dayId, purchaseIndex) {

            Restangular.one('days', dayId).get().then(function (res) {

                var day = res;

                day.purchases.splice(purchaseIndex, 1);

                day.put().then(function () {
                    $state.go('home', null, {reload: true});
                });
            });
        },
        getPurchase: function (dayId, purchaseIndex) {

            return Restangular.one('days', dayId).get().then(function (response) {

                var day = response;
                var purchase = day.purchases[purchaseIndex];
                return purchase;
            });


        },
        editPurchase: function (dayId, purchaseIndex, purchase) {
            Restangular.one('days', dayId).get().then(function(day){
                day.purchases[purchaseIndex] = purchase;
                day.put().then(function () {
                    $state.go('home', null, {reload: true});
                });
            });
        }	
	}
});