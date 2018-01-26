"use strict";

const angular = require("angular");
const myApp = angular.module("funStuff");

myApp.factory("SongFactory", function($q, $http) {
    let getSongs = () => {
        // new angular shit: $q = promises
        return $q((resolve, reject) => {
            // new angular shit: $http = ajax
            $http.get("/assets/js/funStuff/data/songs.json")
                .then(response => resolve(response))
                .catch(err => reject(err));
        });
    };

    return { getSongs };
});