"use strict";

const angular = require("angular");
const myApp = angular.module("appName");

myApp.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "assets/js/partials/template.html",
            controller: "controller"
        });
});