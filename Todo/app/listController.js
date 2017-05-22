(function () {
    angular.module('todo')
        .controller('listController', listController);

    /*
        This syntax gives the same result as the syntax in the home
        controller. You're just explicitly injecting the dependencies.
     */
    listController.$inject = ['$scope', '$http'];

    function listController($scope, $http) {
        $scope.welcome = "list controller working";

        //the empty list to iterate through on the screen
        $scope.list = [];

        /*
            this $http call will fire immediately when the 
            list controller is called (when you navigate to the page).
            This hits our API with a HTTP GET request.
        */
        $http.get('/api/todo')
            .then(function (res) {
                $scope.list = res.data;
            });

    }
})();