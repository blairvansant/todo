(function () {
    angular.module('todo')
        .controller('detailController', detailController);

    detailController.$inject = ['$scope'];

    function detailController($scope) {
        $scope.welcome = "detail controller working";
    }
})();

