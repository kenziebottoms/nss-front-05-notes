"use strict";

const angular = require("angular");
const myApp = angular.module("funStuff");

myApp.config($routeProvider => {
    $routeProvider
        .when("/songs", {
            templateUrl: "assets/js/funStuff/partials/songs.html",
            controller: "SongCtrl"
        })
        .when("/songs/:songId", {
            templateUrl: "assets/js/funStuff/partials/songDetail.html",
            controller: "SongDetailCtrl"
        });
});