(function () {
    angular.module('todo')
        .controller('addController', addController);

    addController.$inject = ['$scope', '$http', '$location'];

    function addController($scope, $http, $location) {
        $scope.welcome = "add controller working";

        $scope.todo = {
            Name: '',
            IsComplete: false
        };

        $scope.submit = function (todo) {
            $http.post('/api/todo', todo)
                .then(function (res) {
                    $location.path('/list');
                })
        }

    }
})();
