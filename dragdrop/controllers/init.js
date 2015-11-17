angular.module("dragDrop").controller("InitController", function ($scope) {

    $scope.models = {
        selected: null,
        lists: {"Favorites": [], "Others": []},
    };

    var movies = [
        {label: "Star Wars", info: "Sci-fi ultra!"},
        {label: "Star Trek", info: "Sci-fi Uber ultra!"},
        {label: "It 1990", info: "Horror at its best!"},
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