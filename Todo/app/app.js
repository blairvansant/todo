(function () {

    angular.module('todo', ['ngRoute']);

    //This could be in a separate routes.js or config.js file.
    angular.module('todo')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                // When you go to /list
                .when('/list', {
                    //use this html
                    templateUrl: 'app/partials/list.html',
                    //and this controller
                    controller: 'listController'
                })
                .when('/add', {
                    templateUrl: 'app/partials/add.html',
                    controller: 'addController'
                })
                .when('/detail', {
                    templateUrl: 'app/partials/detail.html',
                    controller: 'detailController'
                })
        }]);

})();
