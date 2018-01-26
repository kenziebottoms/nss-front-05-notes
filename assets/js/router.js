"use strict";

const angular = require("angular");
const myApp = angular.module("funStuff");

myApp.config($routeProvider => {
    $routeProvider
        .when("/songs", {
            templateUrl: "assets/js/partials/songs.html",
            controller: "SongCtrl"
        })
        .when("/songs/:songId", {
            templateUrl: "assets/js/partials/songDetail.html",
            controller: "SongDetailCtrl"
        });
});