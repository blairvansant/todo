(function () {
    angular.module('todo')
    /* 
        uses dependency injection to give your controller access 
        to $scope functionality. You need the peculiar-looking syntax
        with the [] and writing the dependencies twice because otherwise
        minification will break your code. Make sure you keep the
        order of the dependencies consistent.
        https://docs.angularjs.org/guide/di
    */
        .controller('homeController', ['$scope', function ($scope) {
            $scope.welcome = "Hello, world";


        }]);
})();

