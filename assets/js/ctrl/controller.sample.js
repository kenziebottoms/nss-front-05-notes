"use strict";

const angular = require("angular");
const myApp = angular.module("appName");

myApp.controller("controller", function($scope) {
    $scope.message = "It works";
});