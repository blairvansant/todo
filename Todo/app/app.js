(function () {

    angular.module('todo', ['ngRoute']);

    angular.module('todo')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/list', {
                    templateUrl: 'app/partials/list.html',
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
