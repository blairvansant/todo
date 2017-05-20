(function () {
    angular.module('todo')
        .controller('listController', listController);

    listController.$inject = ['$scope', '$http'];

    function listController($scope, $http) {
        $scope.welcome = "list controller working";

        $scope.list = [];

        $http.get('/api/todo')
            .then(function (res) {
                $scope.list = res.data;
            });

    }
})();