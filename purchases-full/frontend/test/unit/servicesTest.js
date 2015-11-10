describe('Unit Services', function () {

    beforeEach(module('purchasesApp'));

    describe('appService', function () {

        var $httpBackend, $rootScope, appService;

        beforeEach(inject(function (_$httpBackend_, _$rootScope_, _appService_) {
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            appService = _appService_;
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });


        it('should make a GET request to the backend for all days', function () {
            $httpBackend.expect('GET', 'http://localhost:7171/days').respond(200, []);
            appService.getAll();
            $httpBackend.flush();
        });

        it('should make a GET request to the backend for one day', function () {
            $httpBackend.expect('GET', 'http://localhost:7171/days').respond(200, {});
            appService.getOne();
            $httpBackend.flush();
        });

        it('should make a PUT request to the backend for purchase', function () {
            $httpBackend.expect('GET', 'http://localhost:7171/days/1').respond(200, {purchases: [{}]});
            $httpBackend.expect('PUT', 'http://localhost:7171/days').respond(200, 'OK');
            $httpBackend.expect('GET', 'views/purchase-content.html').respond(200, 'OK');
            appService.savePurchase(1, {});
            $httpBackend.flush();
        });

        it('should make a GET request to the backend for purchase delete', function () {
            $httpBackend.expect('GET', 'http://localhost:7171/days/1').respond(200, {purchases: [{}]});
            appService.getPurchase(1, 1);
            $httpBackend.flush();
        });

        it('should make a PUT request to the backend for purchase edit', function () {
            $httpBackend.expect('GET', 'http://localhost:7171/days/1').respond(200, {purchases: [{}]});
            $httpBackend.expect('PUT', 'http://localhost:7171/days').respond(200, 'OK');
            $httpBackend.expect('GET', 'views/purchase-content.html').respond(200, 'OK');
            appService.editPurchase(1, 1, {});
            $httpBackend.flush();
        });

    });
});