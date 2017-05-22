(function () {
    angular.module('todo')
        .controller('detailController', detailController);
    /*
        This syntax gives the same result as the syntax in the home
        controller. You're just explicitly injecting the dependencies.
     */
    detailController.$inject = ['$scope'];

    function detailController($scope) {
        $scope.welcome = "detail controller working";
    }
})();

