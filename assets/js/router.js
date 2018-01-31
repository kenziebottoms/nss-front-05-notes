"use strict";

const angular = require("angular");

angular.module("NoteApp").config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "assets/partials/note-list.html",
            controller: "NoteListCtrl"
        });
});