'use strict';
angular.module('todoApp')
.controller('homeCtrl', ['$scope', 'adalAuthenticationService','$location', function ($scope, adalService, $location) {
    $scope.login = function () {
        
        // TODO: Sign the user in when the Login button is clicked.

    };
    $scope.logout = function () {

        // TODO: Sign the user out when the Logout button is clicked.

    };
    $scope.isActive = function (viewLocation) {        
        return viewLocation === $location.path();
    };
}]);