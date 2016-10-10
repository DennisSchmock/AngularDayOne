
var myApp = angular.module('CarApp', []);

myApp.controller('CarController', ['$scope', function ($scope) {
        var cars = [
            {year: 1997, registered: 867621600000, make: 'Ford', model: 'E350', description: 'ac, abs, moon', price: 3000}
            , {year: 1999, registered: 945212400000, make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
            , {year: 2000, registered: 953766000000, make: 'Chevy', model: 'Venture', description: '', price: 5000}
            , {year: 1996, registered: 844380000000, make: 'Jeep', model: 'Grand Cherokee', description: 'Air, moon roof,loaded', price: 4799}
        ];
        $scope.propName = 'year';
        $scope.title = "Cars Demo App";
        $scope.reverse = true;
        $scope.cars = cars;
        $scope.sortBy = function (propName) {
            $scope.reverse = ($scope.propName === propName) ? !$scope.reverse : false;
            $scope.propName = propName;

        };
    }]);

