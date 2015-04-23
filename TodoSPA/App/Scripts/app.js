'use strict';

// TODO: Add the adal.js module to the application
angular.module('todoApp', ['ngRoute'])
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        
        // TODO: Require that the user sign in before accessing the TodoList controller.

    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });


    // TODO: Initialize the adalProvider
   
}]);
