angular.module("dragDrop",["ui.router","dndLists"]);

angular.module("dragDrop").config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	            
	            // HOME STATES AND NESTED VIEWS ========================================
	            .state('home', {
	                url: '/',
	                templateUrl: 'simple-frame.html',
	                controller: 'InitController',
	                controllerAs: 'InitController'
	});
});

angular.module("dragDrop").controller("InitController", function($scope) {

    $scope.models = {
        selected: null,
        lists: {"Favorites": [], "Others": []},
    };

    var movies = [
        {label: "Star Wars", info: "Sci-fi ultra!"},
        {label: "Star Trek", info: "Sci-fi Uber ultra!"},
        {label: "It", info: "Horror at its best!"},
        {label: "Green Mile", info: "Heartbreaking story!"},
        {label: "Titanic", info: "Best movie for going asleep!"},
        {label: "Back to the future", info: "No flying boards in 2015 :("}
    ];

    // Generate initial model
    for (var i = 0; i < 3; ++i) {
        $scope.models.lists.Favorites.push({label: movies[i].label, info: movies[i].info});
        $scope.models.lists.Others.push({label: movies[i+3].label, info: movies[i+3].info});
    }

    //Initial sorting of Others
    $scope.models.lists.Others = $scope.models.lists.Others.sort(function(a, b) {
        if (a.label > b.label) {
            return 1;
        }
        else {
            return -1;
        }
    });

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});

angular.module("dragDrop").controller("ToggleController", function($scope) {
    
    $scope.showInfo = false;

    $scope.showText = function() {
        $scope.showInfo = !$scope.showInfo;
    };

});

angular.module("dragDrop").controller("PushPopController", function($scope) {

    //toSort keeps the ascending sort of destination array, can be put in separate service
    var pushPop = function(destination, source, index, toSort) {
        if (toSort) {
            for (var i=0; i<destination.length; i++) {
                if (destination[i].label > source[index].label) {
                    destination.splice(i, 0, source[index]);
                    break;
                }
                if ((i + 1) === destination.length) {
                    destination.push(source[index]);
                    break;
                }
            }
            if (destination.length === 0) {
                destination.push(source[index]);
            }
        } else {
            destination.push(source[index]);
        }
        source.splice(index,1);
    };

    $scope.toFav = function(index) {
        pushPop($scope.models.lists.Favorites, $scope.models.lists.Others, index);
    };

    $scope.toOthers = function(index) {
        pushPop($scope.models.lists.Others, $scope.models.lists.Favorites, index, true);
    };

});