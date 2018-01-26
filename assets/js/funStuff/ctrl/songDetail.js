"use strict";

const angular = require("angular");
const myApp = angular.module("funStuff");

myApp.controller("SongDetailCtrl", function($scope, $routeParams, SongFactory) {
    SongFactory.getSongs().then(response => {
        let songs = response.data.songs;
        $scope.song = songs.find(song => song.id == +$routeParams.songId);
    });
});