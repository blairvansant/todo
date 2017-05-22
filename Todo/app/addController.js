(function () {
    angular.module('todo')
        .controller('addController', addController);

    /*
        This syntax gives the same result as the syntax in the home
        controller. You're just explicitly injecting the dependencies.
        https://docs.angularjs.org/guide/di
     */
    addController.$inject = ['$scope', '$http', '$location'];

    function addController($scope, $http, $location) {
        $scope.welcome = "add controller working";

        /*
            This could just be an empty object. I just need to  
            prevent a "cannot find property {x} of undefined" error.
        */
        $scope.todo = {
            name: '',
            isComplete: false
        };

        //This function sends an HTTP POST request to our api.
        //https://docs.angularjs.org/api/ng/service/$http
        $scope.submit = function (todo) {
            /*
                Sometimes the $http functionality is abstracted out
                into a service or factory. 
            */
            $http.post('/api/todo', todo)
                .then(function (res) {
                    //Redirects to list page
                    $location.path('/list');
                })
        }

    }
})();
