describe('Unit Controllers: ', function () {

    function sanitizeRestangularAll(items) {
        var all = _.map(items, function(item) {
            return sanitizeRestangularOne(item);
        });
        return sanitizeRestangularOne(all);
    }

    function sanitizeRestangularOne(item) {
        return _.omit(item, "save", "fromServer", "oneUrl", "restangularized", "allUrl", "plain", "several", "reqParams", "clone", "withHttpConfig", "getRequestedUrl", "getParentList", "route", "parentResource", "getList", "get", "post", "put", "remove", "head", "trace", "options", "patch",
            "$get", "$save", "$query", "$remove", "$delete", "$put", "$post", "$head", "$trace", "$options", "$patch",
            "$then", "$resolved", "restangularCollection", "customOperation", "customGET", "customPOST",
            "customPUT", "customDELETE", "customGETLIST", "$getList", "$resolved", "restangularCollection", "one", "all", "doGET", "doPOST",
            "doPUT", "doDELETE", "doGETLIST", "addRestangularMethod", "getRestangularUrl");
    }

    var $httpBackend,
        purchaseData = function() {
            return  [
                        {
                            _id:{
                                $oid: '5616941ac9240e100315bab3'
                            },
                            name: 'Tuesday',
                            purchases: [{
                                purchase: 'batteries',
                                store: 'Wallmart',
                                description: 'Duracell',
                                price: 30,
                                _id: {
                                    $oid: '5616941ac9240e100315bab5'
                                }
                            }, {
                                purchase: 'meat',
                                store: 'Billa',
                                description: 'awful',
                                price: 40,
                                _id: {
                                    $oid: '5616941ac9240e100315bab4'
                                }
                            }],
                            __v: 0
                        }
                    ];
        };

    beforeEach(module('purchasesApp'));

    describe('HomeCtrl', function () {

        // Initialize variables for controller and scope.
        var HomeCtrl, scope, vm;

        // Before each test create controller and scope.
        beforeEach(inject(
            function (_$httpBackend_, $controller, $rootScope) {
                $httpBackend = _$httpBackend_;
                $httpBackend.expectGET('http://localhost:7171/days').respond(purchaseData());
                scope = $rootScope.$new();
                // debugger
                // console.log('!!!!!!', scope);
                HomeCtrl = $controller('HomeCtrl', {$scope: scope});

                // ControllerAs syntax.
                vm = HomeCtrl;
            }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        // test active days variable.
        it('should have days defined', function () {
            $httpBackend.flush();
            expect(scope.days).toBeDefined();
        });

        // Test data from service.
        it('should have days returned', function () {
            $httpBackend.flush();
            expect(scope.days).not.toBeNull();
        });

        // Test if data contains Tuesday
        it('should have Tuesday', function () {
            $httpBackend.flush();
            expect(sanitizeRestangularAll(scope.days)).toEqual({0: purchaseData()[0]});
        });

        // test active day variable.
        it('should have active day defined', function () {
            $httpBackend.flush();
            expect(vm.active).toBeDefined();
        });

        // Test setActive function.
        it('Should be equal to 5', function () {
            $httpBackend.flush();
            vm.setActive(5);
            expect(vm.active).toEqual(5);
        })

    });


    describe('MainCtrl', function () {

        // Initialize variables for controller and scope
        var MainCtrl, scope, vm, stateParams;

        // Before each test create controller and scope.
        beforeEach(inject(
            function ($controller, $rootScope) {

                scope = $rootScope.$new();
                stateParams = {id: 6};
                MainCtrl = $controller('MainCtrl', {$scope: scope, $stateParams: stateParams});

                // ControllerAs syntax
                vm = MainCtrl;
            }));

        it('should have dayId defined', function () {
            expect(vm.dayId).toBeDefined();
        });

        it('should have dayId equal to 6', function () {
            expect(vm.dayId).toBe(6);
        });

        it('should have dayId defined', function () {
            expect(vm.dayId).not.toBeNull();
        });

        it('should have day defined', function () {
            expect(vm.day).toBeDefined();
        });

        it('should have deletePurchase defined', function () {
            expect(vm.deletePurchase).toBeDefined();
        });
    });

    describe('AddCtrl', function () {

        var AddCtrl, scope, vm, stateParams;

        beforeEach(inject(function ($controller, $rootScope) {

            scope = $rootScope.$new();
            stateParams = {id: 4};
            AddCtrl = $controller('AddCtrl', {$scope: scope, $stateParams: stateParams});
            vm = AddCtrl;
        }));

        it('should have newPurchase defined', function () {
            expect(vm.newPurchase).toBeDefined();
        });

        it('should have newPurchase not null', function () {
            expect(vm.newPurchase).not.toBeNull();
        });

        it('should have dayId defined', function () {
            expect(vm.dayId).toBeDefined();
        });

        it('should have dayId equal to 4', function () {
            expect(vm.dayId).toBe(4);
        });

        it('should have addPurchase defined', function () {
            expect(vm.addPurchase).toBeDefined();
        });

    });

    describe('EditCtrl', function () {

        var EditCtrl, scope, vm, stateParams, res;

        beforeEach(inject(function ($controller, $rootScope) {

            scope = $rootScope.$new();
            stateParams = {id: 3, index: 5};
            res = {};
            EditCtrl = $controller('EditCtrl', {$scope: scope, $stateParams: stateParams});
            vm = EditCtrl;
        }));

        it('should have newPurchase defined', function () {
            expect(vm.purchaseIndex).toBeDefined();
        });

        it('should have newPurchase not null', function () {
            expect(vm.purchaseIndex).toBe(5);
        });

        it('should have dayId defined', function () {
            expect(vm.dayId).toBeDefined();
        });

        it('should have dayId equal to 4', function () {
            expect(vm.dayId).toBe(3);
        });

        it('should have currentPurchase defined', function(){
            expect(vm.currentPurchase).not.toBeNull();
        });

        it('should have editPurchase defined', function () {
            expect(vm.editPurchase).toBeDefined();
        });

        it('should have deletePurchase defined', function () {
            expect(vm.deletePurchase).toBeDefined();
        });

    });

});