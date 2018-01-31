"use strict";

const angular = require("angular");

angular.module("NoteApp").controller("LoginCtrl", function ($scope, UserFactory, $location) {
    // if user is logged in, redirect to homepage
    UserFactory.isLoggedIn()
        .then(response => $location.path("/all"))
        .catch();

    $scope.login = () => {
        UserFactory.login($scope.email, $scope.password);
    };
    $scope.register = () => {
        UserFactory.register($scope.email, $scope.password);
    };
});