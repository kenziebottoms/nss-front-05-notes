"use strict";

const angular = require("angular");
const myApp = angular.module("funStuff");

myApp.controller("SongCtrl", function($scope, SongFactory) {
    SongFactory.getSongs().then(response => {
        $scope.songs = response.data.songs;
    });
});